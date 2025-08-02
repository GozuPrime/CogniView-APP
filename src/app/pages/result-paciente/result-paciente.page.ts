import { Component, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonGrid, IonRow, IonCol } from '@ionic/angular/standalone';
import { HeaderComponent } from "src/app/shared/components/header/header.component";
import { PacientesService } from 'src/app/core/services/pacientes.service';
import { ResponseServer } from 'src/app/core/models/response-server';
import { PacienteAnalisis } from 'src/app/core/models/paciente/pacientes-analisis';
import { ItemsResultComponent } from "src/app/components/resultado/items-result/items-result.component";
import { IonSearchbar } from '@ionic/angular/standalone';
import { UtilsService } from 'src/app/core/services/utils.service';
import { ListResultComponent } from 'src/app/components/resultado/list-result/list-result.component';

@Component({
  selector: 'app-result-paciente',
  templateUrl: './result-paciente.page.html',
  styleUrls: ['./result-paciente.page.scss'],
  standalone: true,
  imports: [IonContent, CommonModule, FormsModule, HeaderComponent, ItemsResultComponent, IonGrid, IonRow, IonCol, IonSearchbar]
})
export class ResultPacientePage {


  lstResultadoAnalisis = signal<PacienteAnalisis[]>([])
  lstResultadoAnalisisFilter = signal<PacienteAnalisis[]>([])

  private utilsService = inject(UtilsService)
  private pacienteServices = inject(PacientesService)

  ionViewWillEnter() {
    this.loadPacienteAnalisis()
  }

  handleInput(event: Event) {
    const target = event.target as HTMLIonSearchbarElement
    const data = target.value?.toLowerCase() as string

    const list = this.lstResultadoAnalisis()
    const filterList = list.filter((element) => {
      const result = data === '' ||
        element.Paciente.dni?.toLowerCase().includes(data) ||
        element.Paciente.nombre?.toLowerCase().includes(data) ||
        element.Paciente.apellido?.toLowerCase().includes(data)

      return result
    })

    this.lstResultadoAnalisisFilter.set(filterList)
  }

  loadPacienteAnalisis() {
    this.pacienteServices.pacientes_analisis_sellst().subscribe((event: ResponseServer) => {
      if (event.exito) {
        this.lstResultadoAnalisis.set(event._analisisPacientes as PacienteAnalisis[])
        this.lstResultadoAnalisisFilter.set(event._analisisPacientes as PacienteAnalisis[])
      }
    })
  }

  async openDeailtResult(event: PacienteAnalisis) {
    const data = await this.utilsService.presentModal({
      component: ListResultComponent,
      componentProps: { event },
      animated: true,
      expandToScroll: false,
      initialBreakpoint: 0.25,
      breakpoints: [0, 0.25, 0.5, 0.75, 1]
    })

  }
}
