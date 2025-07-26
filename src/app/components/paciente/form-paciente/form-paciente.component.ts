import { Component, inject, Input, input } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { IonInput, IonContent } from "@ionic/angular/standalone";
import { Paciente } from 'src/app/core/models/paciente/paciente';
import { PacienteResponse } from 'src/app/core/models/paciente/paciente-response';
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
  imports: [IonInput, ButtonComponent, ReactiveFormsModule, HeaderComponent, IonContent],
})
export class FormPacienteComponent {
  private alertService = inject(AlertService)
  private pacienteService = inject(PacientesService)
  private utilsServices = inject(UtilsService)

  @Input() paciente?: Paciente;
  // formAuth = output<PacienteResponse>()
  // idPaciente = input.required<string>()
  // paciente = input.required<Paciente>()

  formulario !: FormGroup
  form = inject(FormBuilder)
  constructor() {
    this.formulario = this.form.group({
      nombre: new FormControl('', [Validators.required]),
      apellido: new FormControl('', [Validators.required]),
      dni: new FormControl('', [Validators.required, Validators.pattern('^[0-9]+$')]),
    });
    this.formulario.reset()

    console.log(this.paciente);


  }

  async submitForm() {
    if (this.formulario.valid) {
      const pacienteData: PacienteResponse = {
        nombre: this.formulario.controls['nombre'].value,
        apellido: this.formulario.controls['apellido'].value,
        dni: this.formulario.controls['dni'].value
      };

      this.pacienteService.pacientes_inst(pacienteData).subscribe((response: ResponseServer) => {
        if (response.exito) {
          console.log(response);

          this.utilsServices.dismissModal({ data: response._paciente })
        } else {
          this.alertService.AlertError('Error', response.mensajeError)
        }
      })

    } else {
      this.alertService.AlertError('Error', 'Completar todos los campos del formulario del paciente.')
    }
  }
}
