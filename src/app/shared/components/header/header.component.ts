import { Component, computed, inject, input, output } from '@angular/core';
import { IonTitle, IonToolbar, IonHeader, IonButtons, IonButton, IonIcon } from "@ionic/angular/standalone";
import { addIcons } from 'ionicons';
import { arrowBackOutline, closeOutline } from 'ionicons/icons';
import { RouterLink } from '@angular/router';
import { UtilsService } from 'src/app/core/services/utils.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  imports: [IonTitle, IonToolbar, IonHeader, RouterLink, IonButtons, IonButton, IonIcon],
})
export class HeaderComponent {

  private utilsServices = inject(UtilsService)

  title = input.required<string>()
  path = input<string>('')
  isModal = input<boolean>()

  pathValid = computed(() => this.path() != '' ? true : false)


  constructor() {

    addIcons({ arrowBackOutline, closeOutline })
  }

  closeButton() {
    this.utilsServices.dismissModal()
  }

}
