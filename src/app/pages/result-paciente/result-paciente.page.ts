import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent } from '@ionic/angular/standalone';
import { HeaderComponent } from "src/app/shared/components/header/header.component";
@Component({
  selector: 'app-result-paciente',
  templateUrl: './result-paciente.page.html',
  styleUrls: ['./result-paciente.page.scss'],
  standalone: true,
  imports: [IonContent, CommonModule, FormsModule, HeaderComponent, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent]
})
export class ResultPacientePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
