import { Component, input, OnInit } from '@angular/core';

@Component({
  selector: 'app-imagen',
  templateUrl: './imagen.component.html',
  styleUrls: ['./imagen.component.scss'],
})
export class ImagenComponent {

  url = input.required<string>()
  alt = input.required<string>()

}
