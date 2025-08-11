import { Component, inject } from '@angular/core';
import { IonIcon, IonTabBar, IonTabButton, IonTabs, IonContent, IonMenu } from '@ionic/angular/standalone';

import { addIcons } from 'ionicons';
import { peopleOutline, clipboardOutline } from 'ionicons/icons';
import { ImagenComponent } from "../../components/imagen/imagen.component";
import { ButtonComponent } from "../../components/button/button.component";
import { AuthService } from 'src/app/core/services/auth.service';
import { Router } from '@angular/router';
import { UtilsService } from 'src/app/core/services/utils.service';
@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.scss'],
  imports: [IonIcon, IonTabBar, IonTabButton, IonTabs, IonContent, IonMenu, ImagenComponent, ButtonComponent]
})
export class TemplateComponent {

  private authServices = inject(AuthService)
  private router = inject(Router)
  private utilService = inject(UtilsService)
  constructor() {
    addIcons({ peopleOutline, clipboardOutline });
  }

  cerrarSesion() {
    this.authServices.logout()
    this.utilService.dismissModal()
    this.router.navigate(['/login'])
  }
}
