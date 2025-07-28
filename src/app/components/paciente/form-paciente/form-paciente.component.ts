import { Component, inject, Input, input, OnInit, signal } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { IonInput, IonContent, IonToolbar, IonFooter } from "@ionic/angular/standalone";
import { Paciente } from 'src/app/core/models/paciente/paciente';
import { PacienteResponse } from 'src/app/core/models/paciente/paciente-response';
import { PacienteResponseUpd } from 'src/app/core/models/paciente/paciente-response-upd';
import { ResponseServer } from 'src/app/core/models/response-server';
import { AlertService } from 'src/app/core/services/alert.service';
import { PacientesService } from 'src/app/core/services/pacientes.service';
import { UtilsService } from 'src/app/core/services/utils.service';
import { ButtonComponent } from "src/app/shared/components/button/button.component";
import { HeaderComponent } from "src/app/shared/components/header/header.component";
@Component({
  selector: 'app-form-paciente',
  templateUrl: './form-paciente.component.html',
  styleUrls: ['./form-paciente.component.scss'],
  imports: [IonInput, ButtonComponent, ReactiveFormsModule, HeaderComponent, IonContent, IonToolbar, IonFooter],
})
export class FormPacienteComponent implements OnInit {
  private alertService = inject(AlertService)
  private pacienteService = inject(PacientesService)
  private utilsServices = inject(UtilsService)

  titulo = signal<string>('Nuevo Paciente')
  idPaciente = signal<string>('')

  @Input() paciente?: Paciente;

  formulario !: FormGroup
  form = inject(FormBuilder)
  constructor() {
    this.formulario = this.form.group({
      nombre: new FormControl('', [Validators.required]),
      apellido: new FormControl('', [Validators.required]),
      dni: new FormControl('', [Validators.required, Validators.pattern('^[0-9]+$')]),
    });
    this.formulario.reset()
  }

  ngOnInit(): void {
    if (this.paciente != undefined) {
      this.titulo.set('Editar Paciente')

      this.formulario.controls['nombre'].setValue(this.paciente.nombre)
      this.formulario.controls['apellido'].setValue(this.paciente.apellido)
      this.formulario.controls['dni'].setValue(this.paciente.dni)
      this.idPaciente.set(this.paciente.idPaciente)
    }
  }

  async submitForm() {
    if (this.formulario.valid) {
      if (this.idPaciente() == '') {
        const pacienteData: PacienteResponse = {
          nombre: this.formulario.controls['nombre'].value,
          apellido: this.formulario.controls['apellido'].value,
          dni: this.formulario.controls['dni'].value
        };

        this.pacienteService.pacientes_inst(pacienteData).subscribe((response: ResponseServer) => {
          if (response.exito) {
            this.utilsServices.dismissModal({ data: response._paciente })
          } else {
            this.alertService.AlertError('Error', response.mensajeError)
          }
        })
      } else {
        const pacienteDataUpd: PacienteResponseUpd = {
          idPaciente: this.idPaciente(),
          nombre: this.formulario.controls['nombre'].value,
          apellido: this.formulario.controls['apellido'].value,
          dni: this.formulario.controls['dni'].value
        }

        this.pacienteService.paciente_upd(pacienteDataUpd).subscribe((response: ResponseServer) => {
          if (response.exito) {
            this.utilsServices.dismissModal({ data: response._paciente })
          } else {
            this.alertService.AlertError('Error', response.mensajeError)
          }
        })
      }

    } else {
      this.alertService.AlertError('Error', 'Completar todos los campos del formulario del paciente.')
    }
  }
}
