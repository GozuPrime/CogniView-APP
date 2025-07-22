import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CardComponent } from "src/app/shared/components/card/card.component";
import { SubtitleComponent } from "src/app/shared/components/subtitle/subtitle.component";
import { FormLoginComponent } from "src/app/components/auth/form-login/form-login.component";
import { Login } from 'src/app/core/models/auth/login';
import { Router } from '@angular/router';
import { ResponseServer } from 'src/app/core/models/response-server';
import { AuthService } from 'src/app/core/services/auth.service';
import { StorageService } from 'src/app/core/services/storage.service';
import { AlertService } from 'src/app/core/services/alert.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, CardComponent, SubtitleComponent, FormLoginComponent]
})
export class LoginPage implements OnInit {
  router = inject(Router)
  authServices = inject(AuthService)
  storageServices = inject(StorageService)
  alertServices = inject(AlertService)
  constructor() { }

  ngOnInit() {
  }

  autenticacion(data: Login) {
    console.log(data);
    
    this.authServices.login(data).subscribe((response: ResponseServer) => {
      if (response.exito) {
        this.storageServices.setStorage('tokenPaciente', response._token)
        this.router.navigate(['/home/history-paciente']);
      }else{
        this.alertServices.AlertError('Error',response.mensajeError)
      }
    })
    // next(response: ResponseServer) {
    //   if (response.exito) {

    //     this.storageServices.setStorage('tokenPaciente', response._token)
    //     this.router.navigate(['/home/history-paciente']);
    //   }

    // },

  }

}
