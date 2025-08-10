import { Component, input, OnInit } from '@angular/core';
import { IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent } from "@ionic/angular/standalone";

@Component({
  selector: 'app-card-ionic',
  templateUrl: './card-ionic.component.html',
  styleUrls: ['./card-ionic.component.scss'],
  imports: [IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent],
})
export class CardIonicComponent implements OnInit {
  title = input<string>()
  subtitle = input<string>()

  ngOnInit() { }

}
