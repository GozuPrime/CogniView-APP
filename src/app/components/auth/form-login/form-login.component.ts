import { Component, OnInit } from '@angular/core';
import { ButtonComponent } from "src/app/shared/components/button/button.component";
import { IonInput } from "@ionic/angular/standalone";

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.scss'],
  imports: [ButtonComponent, IonInput],
})
export class FormLoginComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
