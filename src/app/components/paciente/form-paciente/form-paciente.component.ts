import { AfterViewInit, Component, effect, inject, input, OnInit, output } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { IonInput } from "@ionic/angular/standalone";
import { Paciente } from 'src/app/core/models/paciente/paciente';
import { PacienteResponse } from 'src/app/core/models/paciente/paciente-response';
import { AlertService } from 'src/app/core/services/alert.service';
import { ButtonComponent } from "src/app/shared/components/button/button.component";

@Component({
  selector: 'app-form-paciente',
  templateUrl: './form-paciente.component.html',
  styleUrls: ['./form-paciente.component.scss'],
  imports: [IonInput, ButtonComponent, ReactiveFormsModule],
})
export class FormPacienteComponent   {
  private alertService = inject(AlertService)
  formAuth = output<PacienteResponse>()
  idPaciente = input.required<string>()
  paciente = input<Paciente | null>()

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

  ionViewDidEnter() {
    this.formulario.controls['nombre'].setValue(this.idPaciente())
  }

  async submitForm() {
    if (this.formulario.valid) {
      const pacienteData: PacienteResponse = {
        nombre: this.formulario.controls['nombre'].value,
        apellido: this.formulario.controls['apellido'].value,
        dni: this.formulario.controls['dni'].value
      };
      this.formAuth.emit(pacienteData);
    } else {
      this.alertService.AlertError('Error', 'Completar todos los campos del formulario del paciente.')
    }
  }
}
