import { Component, inject, OnInit, output } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormControl, FormGroup, Validator, Validators } from '@angular/forms';
import { IonInput, AlertController } from "@ionic/angular/standalone";
import { Paciente } from 'src/app/core/models/paciente/paciente';
import { AlertService } from 'src/app/core/services/alert.service';
import { ButtonComponent } from "src/app/shared/components/button/button.component";

@Component({
  selector: 'app-form-paciente',
  templateUrl: './form-paciente.component.html',
  styleUrls: ['./form-paciente.component.scss'],
  imports: [IonInput, ButtonComponent, ReactiveFormsModule],
})
export class FormPacienteComponent implements OnInit {
  formAuth = output<Paciente>()
  private alertService = inject(AlertService)
  formulario !: FormGroup
  form = inject(FormBuilder)
  constructor() {
    this.formulario = this.form.group({
      nombre: new FormControl('', [Validators.required]),
      apellido: new FormControl('', [Validators.required]),
      dni: new FormControl('', [Validators.required, Validators.pattern('^[0-9]+$')]),
    });
  }

  ngOnInit() { }

  async submitForm() {
    if (this.formulario.valid) {
      //alert("Formulario enviado correctamente");
      const pacienteData: Paciente = {
        idPaciente: this.formulario.controls['idPaciente']?.value || 0,
        idUsuario: this.formulario.controls['idUsuario']?.value || 0,
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
