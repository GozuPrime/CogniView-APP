import { Component, OnInit } from '@angular/core';
import { IonInput } from "@ionic/angular/standalone";
import { ButtonComponent } from "src/app/shared/components/button/button.component";

@Component({
  selector: 'app-form-paciente',
  templateUrl: './form-paciente.component.html',
  styleUrls: ['./form-paciente.component.scss'],
  imports: [IonInput, ButtonComponent],
})
export class FormPacienteComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
