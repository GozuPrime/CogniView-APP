import { Component, OnInit } from '@angular/core';
import {
  IonIcon,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from '@ionic/angular/standalone';

import { addIcons } from 'ionicons';
import { peopleOutline,clipboardOutline } from 'ionicons/icons';
@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.scss'],
  imports: [IonIcon, IonTabBar, IonTabButton, IonTabs]
})
export class TemplateComponent {

  constructor() { 
    addIcons({ peopleOutline,clipboardOutline });
  }


}
