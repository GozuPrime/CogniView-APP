import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar,IonFab, IonFabButton } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { addCircleOutline } from 'ionicons/icons';

@Component({
  selector: 'app-history-paciente',
  templateUrl: './history-paciente.page.html',
  styleUrls: ['./history-paciente.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonFab, IonFabButton,]
})
export class HistoryPacientePage implements OnInit {

  constructor() {

  }

  ngOnInit() {
  }

}
