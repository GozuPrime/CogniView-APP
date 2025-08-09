import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ImagenComponent } from "src/app/shared/components/imagen/imagen.component";

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss'],
  imports: [ImagenComponent],
})
export class IntroComponent implements OnInit {

  private router = inject(Router)

  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this.router.navigateByUrl('/login')
    }, 1500)
  }

}
