import { Component, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonFab, IonFabButton, IonIcon, IonItemOption, IonItemOptions, IonLabel, IonItemSliding, IonItem, IonList, IonAvatar } from '@ionic/angular/standalone';
import { HeaderComponent } from "src/app/shared/components/header/header.component";
import { addIcons } from 'ionicons';
import { add, trash, createOutline, cameraOutline } from 'ionicons/icons';
import { RouterLink } from '@angular/router';
import { Paciente } from 'src/app/core/models/paciente/paciente';
import { PacientesService } from 'src/app/core/services/pacientes.service';
import { ResponseServer } from 'src/app/core/models/response-server';

@Component({
  selector: 'app-history-paciente',
  templateUrl: './history-paciente.page.html',
  styleUrls: ['./history-paciente.page.scss'],
  standalone: true,
  imports: [IonContent, IonIcon, RouterLink, CommonModule, FormsModule, IonItemOption, IonItemOptions, IonFab, IonFabButton, HeaderComponent, IonLabel, IonItemSliding, IonItem, IonList, IonAvatar]
})
export class HistoryPacientePage implements OnInit {

  listPacientes = signal<Paciente[]>([])

  private pacienteServices = inject(PacientesService)

  constructor() {
    addIcons({ add, trash, createOutline, cameraOutline });
  }

  ngOnInit() {
    this.pacienteServices.pacientes_sellst().subscribe((event:ResponseServer)=>{
      if(event.exito){
        this.listPacientes.set(event._pacientes as Paciente[])
      }
    })
  }

  

}
