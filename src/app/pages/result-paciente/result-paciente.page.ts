import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonList, IonItem, IonLabel, IonCard, IonCardContent, IonCardHeader, IonCardTitle } from '@ionic/angular/standalone';
import { HeaderComponent } from "src/app/shared/components/header/header.component";
@Component({
  selector: 'app-result-paciente',
  templateUrl: './result-paciente.page.html',
  styleUrls: ['./result-paciente.page.scss'],
  standalone: true,
  imports: [IonContent, IonList, IonItem, IonLabel, IonCard, IonCardContent, IonCardHeader, IonCardTitle, CommonModule, FormsModule, HeaderComponent]
})
export class ResultPacientePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
