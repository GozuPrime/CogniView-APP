import { Paciente } from './../../core/models/paciente/paciente';
import { Component, inject, OnDestroy, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonFab, IonFabButton, IonIcon, IonItemOption, IonItemOptions, IonLabel, IonItemSliding, IonItem, IonList, IonAvatar } from '@ionic/angular/standalone';
import { HeaderComponent } from "src/app/shared/components/header/header.component";
import { addIcons } from 'ionicons';
import { add, trash, createOutline, cameraOutline } from 'ionicons/icons';
import { PacientesService } from 'src/app/core/services/pacientes.service';
import { ResponseServer } from 'src/app/core/models/response-server';
import { AlertService } from 'src/app/core/services/alert.service';
import { UtilsService } from 'src/app/core/services/utils.service';
import { FormPacienteComponent } from 'src/app/components/paciente/form-paciente/form-paciente.component';
import { ModalController } from '@ionic/angular/standalone';
import { FormCaptureIaComponent } from 'src/app/components/paciente/form-capture-ia/form-capture-ia.component';

@Component({
  selector: 'app-history-paciente',
  templateUrl: './history-paciente.page.html',
  styleUrls: ['./history-paciente.page.scss'],
  standalone: true,
  imports: [IonContent, IonIcon,  CommonModule, FormsModule, IonItemOption, IonItemOptions, IonFab, IonFabButton, HeaderComponent, IonLabel, IonItemSliding, IonItem, IonList, IonAvatar]
})
export class HistoryPacientePage {

  listPacientes = signal<Paciente[]>([])

  private pacienteServices = inject(PacientesService)
  private alertServices = inject(AlertService)
  private utilsServices = inject(UtilsService)
  private modalController = inject(ModalController)

  constructor() {
    addIcons({ add, trash, createOutline, cameraOutline });
  }

  ionViewWillEnter() {
    this.loadPacientes();
  }

  loadPacientes() {
    this.pacienteServices.pacientes_sellst().subscribe((event: ResponseServer) => {
      if (event.exito) {
        this.listPacientes.set(event._pacientes as Paciente[])
      }
    })
  }

  async analityImagen(paciente?: Paciente) {
    const data = await this.utilsServices.presentModal({
      component: FormCaptureIaComponent,
      componentProps: { paciente }
    })

    // if (data) {
    //   const paciente = this.listPacientes()
    //   this.listPacientes.set([...paciente, data.data[0]])
    // }
  }

  async addUpdPaciente(paciente?: Paciente) {
    const data = await this.utilsServices.presentModal({
      component: FormPacienteComponent,
      componentProps: { paciente }
    })

    if (data) {
      const paciente = this.listPacientes()
      this.listPacientes.set([...paciente, data.data[0]])
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
        } else {
          this.alertServices.AlertError('Error', event.mensajeError)
        }
      })
    }
  }

}
