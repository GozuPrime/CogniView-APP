import { Component, OnInit } from '@angular/core';
import { IonContent, IonList, IonItem, IonLabel, IonButton } from '@ionic/angular/standalone';
import { CardComponent } from "src/app/shared/components/card/card.component";
import { FormPacienteComponent } from "src/app/components/form-paciente/form-paciente.component";
import { SubtitleComponent } from "src/app/shared/components/subtitle/subtitle.component";
import { HeaderComponent } from "src/app/shared/components/header/header.component";

@Component({
  selector: 'app-paciente',
  templateUrl: './paciente.page.html',
  styleUrls: ['./paciente.page.scss'],
  standalone: true,
  imports: [IonContent, CardComponent, FormPacienteComponent, SubtitleComponent, IonList, IonItem, IonLabel, IonButton, HeaderComponent]
})
export class PacientePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
