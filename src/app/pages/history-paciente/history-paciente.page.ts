import { Paciente } from './../../core/models/paciente/paciente';
import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonFab, IonFabButton, IonIcon, IonItemOption, IonItemOptions, IonLabel, IonItemSliding, IonItem, IonList, IonAvatar } from '@ionic/angular/standalone';
import { HeaderComponent } from "src/app/shared/components/header/header.component";
import { addIcons } from 'ionicons';
import { add, trash, createOutline, cameraOutline, archiveOutline } from 'ionicons/icons';
import { PacientesService } from 'src/app/core/services/pacientes.service';
import { ResponseServer } from 'src/app/core/models/response-server';
import { AlertService } from 'src/app/core/services/alert.service';
import { UtilsService } from 'src/app/core/services/utils.service';
import { FormPacienteComponent } from 'src/app/components/paciente/form-paciente/form-paciente.component';
import { IonSearchbar } from '@ionic/angular/standalone';
import { FormCaptureIaComponent } from 'src/app/components/paciente/form-capture-ia/form-capture-ia.component';

@Component({
  selector: 'app-history-paciente',
  templateUrl: './history-paciente.page.html',
  styleUrls: ['./history-paciente.page.scss'],
  standalone: true,
  imports: [IonContent, IonIcon, CommonModule, FormsModule, IonItemOption, IonItemOptions, IonFab, IonFabButton, HeaderComponent, IonLabel, IonItemSliding, IonItem, IonList, IonAvatar, IonSearchbar]
})
export class HistoryPacientePage {

  listPacientes = signal<Paciente[]>([])
  listPacienteFiltro = signal<Paciente[]>([])


  private pacienteServices = inject(PacientesService)
  private alertServices = inject(AlertService)
  private utilsServices = inject(UtilsService)

  constructor() {
    addIcons({ add, trash, createOutline, cameraOutline, archiveOutline });
  }

  ionViewWillEnter() {
    this.loadPacientes();
  }


  loadPacientes() {
    this.pacienteServices.pacientes_sellst().subscribe((event: ResponseServer) => {
      if (event.exito) {
        this.listPacientes.set(event._pacientes as Paciente[])
        this.listPacienteFiltro.set(event._pacientes as Paciente[])
      }
    })
  }

  handleInput(event: Event) {
    const target = event.target as HTMLIonSearchbarElement
    const data = target.value?.toLowerCase() as string

    const list = this.listPacientes()
    const filterList = list.filter((element) => {
      const result = data === '' ||
        element.dni?.toLowerCase().includes(data) ||
        element.nombre?.toLowerCase().includes(data) ||
        element.apellido?.toLowerCase().includes(data)

      return result
    })

    this.listPacienteFiltro.set(filterList)
  }

  async analityImagen(paciente?: Paciente) {
    const data = await this.utilsServices.presentModal({
      component: FormCaptureIaComponent,
      componentProps: { paciente },
      animated: true
    })

    if (data) {
      this.alertServices.AlertError('Exito !!', 'El analisis se subio correctamente.')
    }
  }

  async addUpdPaciente(paciente?: Paciente) {
    const data = await this.utilsServices.presentModal({
      component: FormPacienteComponent,
      componentProps: { paciente },
      animated: true
    })

    if (data) {
      const dataPaciente = data.data[0]
      const pacientes = this.listPacientes()

      const validatePaciente = pacientes.some(p => p.idPaciente == dataPaciente.idPaciente)

      if (validatePaciente) {
        const newList = pacientes.map(p => {
          return p.idPaciente == dataPaciente.idPaciente ? { ...p, ...dataPaciente } : p
        })

        this.listPacientes.set(newList)
        this.listPacienteFiltro.set(newList)
      } else {
        this.listPacientes.set([...pacientes, data.data[0]])
        this.listPacienteFiltro.set([...pacientes, data.data[0]])
      }

    }
  }

  async deletePaciente(paciente: Paciente) {
    const confirmed = await this.alertServices.AlertConfirm(
      '¿Estás seguro?',
      'Esta acción no se puede deshacer.'
    );

    if (confirmed) {
      this.pacienteServices.paciente_dlt(paciente.idPaciente).subscribe((event: ResponseServer) => {
        if (event.exito) {
          const newList = this.listPacientes().filter(element => element.idPaciente !== paciente.idPaciente)
          this.listPacientes.set(newList)
          this.listPacienteFiltro.set(newList)
        } else {
          this.alertServices.AlertError('Error', event.mensajeError)
        }
      })
    }
  }

}
