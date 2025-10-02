import { Component, inject, signal } from '@angular/core';
import { IonContent, IonText, IonCard, IonItem, IonIcon, IonLabel, IonButton, IonChip } from '@ionic/angular/standalone';
import { CardComponent } from "src/app/shared/components/card/card.component";
import { addIcons } from 'ionicons';
import { analyticsSharp, caretForwardSharp, peopleSharp, pulseSharp } from 'ionicons/icons';
import { Router } from '@angular/router';
import { PacientesService } from 'src/app/core/services/pacientes.service';
import { ResponseServer } from 'src/app/core/models/response-server';
import { AnalisisGrado } from 'src/app/core/models/analisis/analisis_grado';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [IonContent, CardComponent, IonText, IonIcon, IonCard, IonItem, IonLabel, IonButton, IonChip]
})
export class HomePage {

  listGrado = signal<AnalisisGrado[]>([])
  confianza = signal<number>(0)

  private readonly router = inject(Router)
  private readonly services = inject(PacientesService)
  constructor() {
    addIcons({ peopleSharp, caretForwardSharp, analyticsSharp, pulseSharp });
  }


  ionViewWillEnter() {
    this.precisionGrado()
    this.precicionConfianza()
  }


  redirect(path: string) {
    this.router.navigateByUrl(path)
  }

  precisionGrado() {
    this.services.analisis_precisiones().subscribe({
      next: (event: ResponseServer) => {
        if (event.exito) {
          this.listGrado.set(event._analisis_grado as AnalisisGrado[])
        }
      }, error: (err) => {

      },
    })
  }

  precicionConfianza() {
    this.services.promedio_Confianza().subscribe({
      next: (event: ResponseServer) => {
        if (event.exito) {
          this.confianza.set(event._promedio_confianza as number)
        }
      }, error: (err) => {

      },
    })
  }


  getColor(grado: string): string {
    switch (grado.toLowerCase()) {
      case 'leve':
        return 'success';  // verde
      case 'moderado':
        return 'warning';  // amarillo
      case 'severo':
        return 'danger';   // rojo
      default:
        return 'medium';   // gris por defecto
    }
  }

}
