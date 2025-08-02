import { Component, Input, OnInit, signal } from '@angular/core';
import { PacienteAnalisis } from 'src/app/core/models/paciente/pacientes-analisis';
import { IonAccordionGroup, IonAccordion, IonItem, IonLabel } from "@ionic/angular/standalone";
import { AnalisisResultados } from 'src/app/core/models/analisis/analisis-resultados';
import { DateFormatPipe } from 'src/app/shared/pipe/date-format.pipe';

@Component({
  selector: 'app-list-result',
  templateUrl: './list-result.component.html',
  styleUrls: ['./list-result.component.scss'],
  imports: [IonAccordionGroup, IonAccordion, IonItem, IonLabel,DateFormatPipe],
})
export class ListResultComponent implements OnInit {

  @Input() event?: PacienteAnalisis;

  title = signal<string>('')
  listAnalisisResultados = signal<AnalisisResultados[]>([])



  constructor() { }

  ngOnInit() {
    if (this.event != undefined) {
      const paciente = this.event.Paciente
      const resultado = this.event.AnalisisResultados
      // console.log(resultado);
      this.listAnalisisResultados.set(resultado)


    }
  }

}
