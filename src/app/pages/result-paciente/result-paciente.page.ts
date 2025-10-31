import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent, IonIcon, IonItem, IonLabel, IonList, IonSearchbar
} from '@ionic/angular/standalone';
import { PacientesService } from 'src/app/core/services/pacientes.service';
import { ResponseServer } from 'src/app/core/models/response-server';
import { PacienteAnalisis } from 'src/app/core/models/paciente/pacientes-analisis';
import { ItemsResultComponent } from "src/app/components/resultado/items-result/items-result.component";
import { UtilsService } from 'src/app/core/services/utils.service';
import { ListResultComponent } from 'src/app/components/resultado/list-result/list-result.component';
import { CardComponent } from "src/app/shared/components/card/card.component";
import { addIcons } from 'ionicons';
import { analyticsOutline, timeOutline } from 'ionicons/icons';
import { DetallesComponent } from 'src/app/components/resultado/detalles/detalles.component';

@Component({
  selector: 'app-result-paciente',
  templateUrl: './result-paciente.page.html',
  styleUrls: ['./result-paciente.page.scss'],
  standalone: true,
  imports: [
    IonContent, CommonModule, FormsModule,
    IonIcon, IonItem, IonLabel, IonList, IonSearchbar,
    ItemsResultComponent, CardComponent
  ]
})
export class ResultPacientePage {
  lstResultadoAnalisis = signal<PacienteAnalisis[]>([]);
  lstResultadoAnalisisFilter = signal<PacienteAnalisis[]>([]);
  totalAnalisis = 0;

  private utilsService = inject(UtilsService);
  private pacienteServices = inject(PacientesService);

  constructor() {
    addIcons({ analyticsOutline, timeOutline });
  }

  ionViewWillEnter() {
    this.loadPacienteAnalisis();
  }

  handleInput(event: Event) {
    const target = event.target as HTMLIonSearchbarElement;
    const data = target.value?.toLowerCase() || '';

    const filterList = this.lstResultadoAnalisis().filter((element) =>
      element.Paciente?.dni?.toLowerCase().includes(data) ||
      element.Paciente?.nombre?.toLowerCase().includes(data) ||
      element.Paciente?.apellido?.toLowerCase().includes(data)
    );

    this.lstResultadoAnalisisFilter.set(filterList);
  }

  loadPacienteAnalisis() {
    this.pacienteServices.pacientes_analisis_sellst().subscribe({
      next: (event: ResponseServer) => {
        if (event.exito) {
          const analisis = event._analisisPacientes as PacienteAnalisis[];
          this.lstResultadoAnalisis.set(analisis);
          this.lstResultadoAnalisisFilter.set(analisis);
          this.totalAnalisis = analisis.length;
        }
      },
      error: (err) => console.error(err)
    });
  }

  lstUltimosAnalisis() {
    const all = this.lstResultadoAnalisis();
    return all.slice(-3).reverse();
  }

  async openDeailtResult(event: PacienteAnalisis) {
    if (event.AnalisisResultados?.length > 0) {
      const data = await this.utilsService.presentModal({
        component: ListResultComponent,
        componentProps: { event },
        animated: true,
        expandToScroll: false,
        initialBreakpoint: 0.25,
        breakpoints: [0, 0.25, 0.5, 0.75, 1]
      });

      if (data?.id) {
        const analisisSeleccionado = event.AnalisisResultados.find(
          (x) => x.Analisis.idAnalisis === data.id
        );

        if (analisisSeleccionado) {
          const eventFiltrado: PacienteAnalisis = {
            Paciente: event.Paciente,
            AnalisisResultados: [analisisSeleccionado]
          };

          await this.utilsService.presentModal({
            component: DetallesComponent,
            componentProps: { event: eventFiltrado },
            animated: true
          });
        }
      }
    }
  }
}
