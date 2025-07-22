import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CardComponent } from "src/app/shared/components/card/card.component";
import { SubtitleComponent } from "src/app/shared/components/subtitle/subtitle.component";
import { FormLoginComponent } from "src/app/components/auth/form-login/form-login.component";
import { Login } from 'src/app/core/models/auth/login';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { ResponseServer } from 'src/app/core/models/response-server';
import { StorageService } from 'src/app/core/services/storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, CardComponent, SubtitleComponent, FormLoginComponent]
})
export class LoginPage implements OnInit {
  router = inject(Router)

  authService = inject(AuthService)

  stogareService = inject(StorageService)

  constructor() { }

  ngOnInit() {
  }

  autenticacion(data: Login) {
    console.log(data);
    this.authService.login(data).subscribe({
      next(response:ResponseServer) {
          if(response.exito){
            this.stogareService.
            this.router.navigate(['/home/history-paciente']);
          }
      },
    })
    
  }

}
