import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonFab, IonFabButton, IonIcon, IonItemOption, IonItemOptions, IonLabel, IonItemSliding, IonItem, IonList } from '@ionic/angular/standalone';
import { HeaderComponent } from "src/app/shared/components/header/header.component";
import { addIcons } from 'ionicons';
import { add, trash ,createOutline,cameraOutline} from 'ionicons/icons';
import { RouterLink } from '@angular/router';
import { Paciente } from 'src/app/core/models/paciente/paciente';

@Component({
  selector: 'app-history-paciente',
  templateUrl: './history-paciente.page.html',
  styleUrls: ['./history-paciente.page.scss'],
  standalone: true,
  imports: [IonContent, IonIcon, RouterLink, CommonModule, FormsModule, IonItemOption, IonItemOptions, IonFab, IonFabButton, HeaderComponent, IonLabel, IonItemSliding, IonItem, IonList]
})
export class HistoryPacientePage implements OnInit {

  constructor() {
    addIcons({ add,  trash,createOutline,cameraOutline });
  }

  ngOnInit() {
  }

  listPaciente = signal<Paciente[]>([
    {
      idPaciente: '1', 
      idUsuario: '12',
      nombre: 'Carlos',
      apellido: 'Vigo',
      dni: '14856273',
    }
  ])

}
