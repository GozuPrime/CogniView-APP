import { Component, input, OnInit } from '@angular/core';
import { IonButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-button',
  imports: [IonButton],
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  type = input.required<'button' | 'submit'>()
  name = input.required<string>()

  constructor() { }

  ngOnInit() { }

}
