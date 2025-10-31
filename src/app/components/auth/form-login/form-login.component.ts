import { Component, inject, OnInit, output } from '@angular/core';
import { ButtonComponent } from "src/app/shared/components/button/button.component";
import { IonInput, IonIcon } from "@ionic/angular/standalone";
import { ReactiveFormsModule, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AlertService } from 'src/app/core/services/alert.service';
import { addIcons } from 'ionicons';
import { eyeOutline, eyeOffOutline } from 'ionicons/icons';
import { Login } from 'src/app/core/models/auth/login';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.scss'],
  imports: [ButtonComponent, IonInput, IonIcon, ReactiveFormsModule],
})
export class FormLoginComponent implements OnInit {
  formAuth = output<Login>();
  private alertService = inject(AlertService);

  formulario!: FormGroup;
  form = inject(FormBuilder);

  showPassword: boolean = false;

  constructor() {
    addIcons({ eyeOutline, eyeOffOutline });

    this.formulario = this.form.group({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required])
    });
    this.formulario.reset();
  }

  ngOnInit() {}

  ionViewWillEnter() {
    this.formulario.reset();
  }

  togglePassword() {
    this.showPassword = !this.showPassword;
  }

  async submitForm() {
    if (this.formulario.valid) {
      const loginData: Login = {
        email: this.formulario.controls['email'].value,
        password: this.formulario.controls['password'].value
      };
      this.formAuth.emit(loginData);
    } else {
      this.alertService.AlertError('Error', 'Debes completar los campos de la autenticación.');
    }
  }
}
