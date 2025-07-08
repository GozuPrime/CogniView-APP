import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CardComponent } from "src/app/shared/components/card/card.component";
import { SubtitleComponent } from "src/app/shared/components/subtitle/subtitle.component";
import { FormLoginComponent } from "src/app/components/auth/form-login/form-login.component";

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [ CommonModule, FormsModule, CardComponent, SubtitleComponent, FormLoginComponent]
})
export class LoginPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
