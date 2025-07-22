import { Component, inject, OnInit, output } from '@angular/core';
import { ButtonComponent } from "src/app/shared/components/button/button.component";
import { IonInput, AlertController } from "@ionic/angular/standalone";
import { Login } from 'src/app/core/models/auth/login';
import { ReactiveFormsModule, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AlertService } from 'src/app/core/services/alert.service';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.scss'],
  imports: [ButtonComponent, IonInput, ReactiveFormsModule],
})
export class FormLoginComponent implements OnInit {
  formAuth = output<Login>()
  private alertService = inject(AlertService)

  formulario !: FormGroup
  form = inject(FormBuilder)
  constructor() {
    this.formulario = this.form.group({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required])
    });
  }

  ngOnInit() { }

  async submitForm() {
    if (this.formulario.valid) {
      //alert("Formulario enviado correctamente");
      const loginData: Login = {
        email: this.formulario.controls['email'].value,
        password: this.formulario.controls['password'].value
      };
      this.formAuth.emit(loginData);
    } else {

      this.alertService.AlertError('Error', 'Debes completar los campo de la autenticación.')
    }
  }

}
