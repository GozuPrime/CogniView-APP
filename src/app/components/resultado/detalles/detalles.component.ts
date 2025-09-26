import { Component, inject, Input } from '@angular/core';
import { PacienteAnalisis } from 'src/app/core/models/paciente/pacientes-analisis';
import { IonIcon, IonCard, IonContent } from "@ionic/angular/standalone";
import { CardComponent } from "src/app/shared/components/card/card.component";
import { closeOutline } from 'ionicons/icons';
import { addIcons } from 'ionicons';
import { UtilsService } from 'src/app/core/services/utils.service';
import { ImagenComponent } from "src/app/shared/components/imagen/imagen.component";

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.scss'],
  imports: [IonIcon, CardComponent, IonCard, ImagenComponent, IonContent],
})
export class DetallesComponent {
  private utilsServices = inject(UtilsService)
  @Input() event?: PacienteAnalisis;

  constructor() {
    addIcons({ closeOutline })
  }

  closeModal() {
    this.utilsServices.dismissModal()
  }
}
