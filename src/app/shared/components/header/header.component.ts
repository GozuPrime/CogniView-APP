import { Component, computed, input, OnInit } from '@angular/core';
import { IonTitle, IonToolbar, IonHeader, IonButtons, IonButton, IonIcon } from "@ionic/angular/standalone";
import { addIcons } from 'ionicons';
import { arrowBackOutline } from 'ionicons/icons';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  imports: [IonTitle, IonToolbar, IonHeader, RouterLink, IonButtons, IonButton, IonIcon],
})
export class HeaderComponent implements OnInit {

  title = input.required<string>()
  path = input<string>('')

  pathValid = computed(() => this.path() != '' ? true : false)

  constructor() {

    addIcons({ arrowBackOutline })
  }

  ngOnInit() { }

}
