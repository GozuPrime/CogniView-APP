import { Component, OnInit } from '@angular/core';
import { IonContent} from '@ionic/angular/standalone';
import { CardComponent } from "src/app/shared/components/card/card.component";
import { FormPacienteComponent } from "src/app/components/form-paciente/form-paciente.component";
import { SubtitleComponent } from "src/app/shared/components/subtitle/subtitle.component";

@Component({
  selector: 'app-paciente',
  templateUrl: './paciente.page.html',
  styleUrls: ['./paciente.page.scss'],
  standalone: true,
  imports: [IonContent,  CardComponent, FormPacienteComponent, SubtitleComponent]
})
export class PacientePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
