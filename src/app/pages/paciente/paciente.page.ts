import { Component, OnInit } from '@angular/core';
import { IonContent } from '@ionic/angular/standalone';
import { HeaderComponent } from "src/app/shared/components/header/header.component";
import { CardComponent } from "src/app/shared/components/card/card.component";
import { FormPacienteComponent } from "src/app/components/paciente/form-paciente/form-paciente.component";

@Component({
  selector: 'app-paciente',
  templateUrl: './paciente.page.html',
  styleUrls: ['./paciente.page.scss'],
  standalone: true,
  imports: [IonContent,  HeaderComponent, CardComponent, FormPacienteComponent]
})
export class PacientePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
