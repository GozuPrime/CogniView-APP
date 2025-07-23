import { Component, inject, OnInit } from '@angular/core';
import { IonContent } from '@ionic/angular/standalone';
import { HeaderComponent } from "src/app/shared/components/header/header.component";
import { CardComponent } from "src/app/shared/components/card/card.component";
import { FormPacienteComponent } from "src/app/components/paciente/form-paciente/form-paciente.component";
import { PacienteResponse } from 'src/app/core/models/paciente/paciente-response';
import { PacientesService } from 'src/app/core/services/pacientes.service';
import { Router } from '@angular/router';
import { ResponseServer } from 'src/app/core/models/response-server';
import { AlertService } from 'src/app/core/services/alert.service';

@Component({
  selector: 'app-paciente',
  templateUrl: './paciente.page.html',
  styleUrls: ['./paciente.page.scss'],
  standalone: true,
  imports: [IonContent, HeaderComponent, CardComponent, FormPacienteComponent]
})
export class PacientePage implements OnInit {

  private pacienteServices = inject(PacientesService)
  private alertServices = inject(AlertService)
  private router = inject(Router)

  constructor() { }

  ngOnInit() {
  }

  

  crearpaciente(paciente: PacienteResponse) {
    console.log(paciente)
    this.pacienteServices.pacientes_inst(paciente).subscribe((event: ResponseServer) => {
      if (event.exito) {
        this.router.navigateByUrl('/home/history-paciente')
      }else{
        this.alertServices.AlertError('Error',event.mensajeError)
      }
    })
  }

}
