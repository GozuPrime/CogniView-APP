import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonFab, IonFabButton, IonIcon, IonItemOption, IonItemOptions, IonLabel, IonItemSliding, IonItem, IonAvatar, IonList } from '@ionic/angular/standalone';
import { HeaderComponent } from "src/app/shared/components/header/header.component";
import { addIcons } from 'ionicons';
import { add, pin, share, trash } from 'ionicons/icons';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-history-paciente',
  templateUrl: './history-paciente.page.html',
  styleUrls: ['./history-paciente.page.scss'],
  standalone: true,
  imports: [IonContent, IonIcon, RouterLink, CommonModule, FormsModule, IonItemOption, IonItemOptions, IonFab, IonFabButton, HeaderComponent, IonLabel, IonItemSliding, IonItem, IonAvatar, IonList]
})
export class HistoryPacientePage implements OnInit {

  constructor() {
    addIcons({ add, pin, share, trash });
  }

  ngOnInit() {
  }

}
