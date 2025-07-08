import { Component, input, OnInit } from '@angular/core';

@Component({
  selector: 'app-subtitle',
  templateUrl: './subtitle.component.html',
  styleUrls: ['./subtitle.component.scss'],
})
export class SubtitleComponent {

  title = input.required<string>()
  description = input.required<string>()

}
