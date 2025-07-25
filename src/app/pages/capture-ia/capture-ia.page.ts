import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent } from '@ionic/angular/standalone';
import { HeaderComponent } from "src/app/shared/components/header/header.component";
import { ButtonComponent } from "src/app/shared/components/button/button.component";
import { ActivatedRoute, Router } from '@angular/router';
import { UtilsService } from 'src/app/core/services/utils.service';
import { CardComponent } from "src/app/shared/components/card/card.component";
@Component({
  selector: 'app-capture-ia',
  templateUrl: './capture-ia.page.html',
  styleUrls: ['./capture-ia.page.scss'],
  standalone: true,
  imports: [IonContent, CommonModule, FormsModule, HeaderComponent, ButtonComponent, CardComponent]
})
export class CaptureIAPage implements OnInit {

  activatedRouter = inject(ActivatedRoute)
  router = inject(Router)
  private utilsService = inject(UtilsService)

  constructor() {
    this.activatedRouter.params.subscribe((params) => {
      console.log(params['id']);
    })
  }

  ngOnInit() {
  }

  async openCamara(){
    const data = await this.utilsService.takePicture('Imagen del Paciente')
    console.log(data.dataUrl);

  }

}
