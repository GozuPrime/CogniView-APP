import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton} from '@ionic/angular/standalone';

@Component({
  selector: 'app-capture-ia',
  templateUrl: './capture-ia.page.html',
  styleUrls: ['./capture-ia.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, IonButton, CommonModule, FormsModule]
})
export class CaptureIAPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
