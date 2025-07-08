import { Component, OnInit } from '@angular/core';
import {
  IonIcon,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from '@ionic/angular/standalone';

import { addIcons } from 'ionicons';
import { library, playCircle, radio, search } from 'ionicons/icons';
@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.scss'],
  imports: [IonIcon, IonTabBar, IonTabButton, IonTabs]
})
export class TemplateComponent {

  constructor() { 
    addIcons({ library, playCircle, radio, search });
  }


}
