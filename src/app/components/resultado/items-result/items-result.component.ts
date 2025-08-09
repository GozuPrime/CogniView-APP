import { Component, computed, input, OnInit } from '@angular/core';
import { PacienteAnalisis } from 'src/app/core/models/paciente/pacientes-analisis';
import { CardIonicComponent } from "src/app/shared/components/card-ionic/card-ionic.component";

@Component({
  selector: 'app-items-result',
  templateUrl: './items-result.component.html',
  styleUrls: ['./items-result.component.scss'],
  imports: [CardIonicComponent],
})
export class ItemsResultComponent implements OnInit {

  pacienteAnalisis = input<PacienteAnalisis>()

  nombrePaciente = computed(() => this.pacienteAnalisis()?.Paciente.nombre + ' ' + this.pacienteAnalisis()?.Paciente.apellido)
  documentoPaciente = computed(() => this.pacienteAnalisis()?.Paciente.dni)

  totalAnalisis = computed(() => this.pacienteAnalisis()?.AnalisisResultados.length)

  classStatus = computed(() => this.pacienteAnalisis()?.AnalisisResultados.length ? 'card-result-poi' : 'card-result-def')

  ngOnInit(): void {
    // console.log(this.pacienteAnalisis());
  }
}
