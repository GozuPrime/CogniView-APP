import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CardComponent } from "src/app/shared/components/card/card.component";
import { SubtitleComponent } from "src/app/shared/components/subtitle/subtitle.component";
import { FormLoginComponent } from "src/app/components/auth/form-login/form-login.component";
import { Login } from 'src/app/core/models/auth/login';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, CardComponent, SubtitleComponent, FormLoginComponent]
})
export class LoginPage implements OnInit {
  private router = inject(Router)
  constructor() { }

  ngOnInit() {
  }

  autenticacion(data: Login) {
    console.log(data);
    this.router.navigate(['/home/history-paciente']);
  }
}
