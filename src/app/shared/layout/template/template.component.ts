import { Component, OnInit } from '@angular/core';
import { IonIcon, IonTabBar, IonTabButton, IonTabs, IonContent, IonMenu } from '@ionic/angular/standalone';

import { addIcons } from 'ionicons';
import { peopleOutline, clipboardOutline } from 'ionicons/icons';
import { HeaderComponent } from "../../components/header/header.component";
@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.scss'],
  imports: [IonIcon, IonTabBar, IonTabButton, IonTabs, IonContent, IonMenu, HeaderComponent]
})
export class TemplateComponent {

  constructor() {
    addIcons({ peopleOutline, clipboardOutline });
  }


}
