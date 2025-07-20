import { Component, inject, OnInit, output } from '@angular/core';
import { ButtonComponent } from "src/app/shared/components/button/button.component";
import { IonInput } from "@ionic/angular/standalone";
import { Login } from 'src/app/core/models/auth/login';
import { ReactiveFormsModule, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.scss'],
  imports: [ButtonComponent, IonInput,ReactiveFormsModule],
})
export class FormLoginComponent implements OnInit {
  formAuth = output<Login>()

  formulario !: FormGroup
  form = inject(FormBuilder)
  constructor() {
    this.formulario = this.form.group({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required])
    });
  }

  ngOnInit() { }

  submitForm() {
    if(this.formulario.valid){
      //alert("Formulario enviado correctamente");
      const loginData: Login = {
        email: this.formulario.controls['email'].value,
        password: this.formulario.controls['password'].value
      };
      this.formAuth.emit(loginData);
    }else{
      alert("Por favor, complete todos los campos requeridos.");
    }
  }

}
