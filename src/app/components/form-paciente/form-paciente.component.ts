import { Component, OnInit } from '@angular/core';
import { ButtonComponent } from "src/app/shared/components/button/button.component";
import { IonInput } from "@ionic/angular/standalone";

@Component({
  selector: 'app-form-paciente',
  templateUrl: './form-paciente.component.html',
  styleUrls: ['./form-paciente.component.scss'],
  imports: [ButtonComponent, IonInput],
})
export class FormPacienteComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
