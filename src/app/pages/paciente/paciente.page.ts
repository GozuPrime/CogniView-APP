import { Component, OnInit } from '@angular/core';
import { IonContent, IonList, IonItem, IonLabel, IonButton } from '@ionic/angular/standalone';
import { HeaderComponent } from "src/app/shared/components/header/header.component";

@Component({
  selector: 'app-paciente',
  templateUrl: './paciente.page.html',
  styleUrls: ['./paciente.page.scss'],
  standalone: true,
  imports: [IonContent, IonList, IonItem, IonLabel, IonButton, HeaderComponent]
})
export class PacientePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
