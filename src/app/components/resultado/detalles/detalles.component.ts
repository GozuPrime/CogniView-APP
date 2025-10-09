import { Component, inject, Input } from '@angular/core';
import { PacienteAnalisis } from 'src/app/core/models/paciente/pacientes-analisis';
import { IonIcon, IonCard, IonContent } from "@ionic/angular/standalone";
import { CardComponent } from "src/app/shared/components/card/card.component";
import { closeOutline } from 'ionicons/icons';
import { addIcons } from 'ionicons';
import { UtilsService } from 'src/app/core/services/utils.service';
import { ImagenComponent } from "src/app/shared/components/imagen/imagen.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.scss'],
  imports: [IonIcon, CardComponent, IonCard, ImagenComponent, IonContent, CommonModule],
})
export class DetallesComponent {
  private utilsServices = inject(UtilsService)
  @Input() event?: PacienteAnalisis;

  obtenerDescripcion(confianza: number): string {
    if (confianza >= 95)
      return 'Alta coherencia en la expresión facial. Patrón emocional estable detectado.';
    if (confianza >= 85)
      return 'Ligera variación facial, posible fluctuación emocional leve.';
    if (confianza >= 70)
      return 'Inconsistencias detectadas en la mirada o gestos, indicio de variación emocional.';
    return 'Alta variabilidad en patrones conductuales, posible presencia de anomalías.';
  }

  obtenerRecomendacion(grado: string | number): string {
    if (typeof grado === 'number') {
    if (grado < 40)
      return 'Nivel leve. Mantener observación regular y ejercicios de relajación.';
    if (grado < 70)
      return 'Nivel moderado. Se recomienda observación continua y apoyo psicológico.';
    return 'Nivel grave. Atención médica urgente y evaluación especializada.';
    }

    const g = grado.toLowerCase();
    if (g.includes('leve'))
      return 'Nivel leve. Mantener observación regular y ejercicios de relajación.';
    if (g.includes('moderado'))
      return 'Nivel moderado. Observación continua y acompañamiento psicológico.';
    if (g.includes('grave'))
      return 'Nivel grave. Atención médica urgente y apoyo profesional inmediato.';
    
    return 'Sin recomendación específica disponible.';

    }

  constructor() {
    addIcons({ closeOutline })
  }

  closeModal() {
    this.utilsServices.dismissModal()
  }
}
