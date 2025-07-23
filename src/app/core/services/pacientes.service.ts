import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { ResponseServer } from '../models/response-server';
import { PacienteResponse } from '../models/paciente/paciente-response';

@Injectable({
  providedIn: 'root'
})
export class PacientesService {

  private url = environment.apiCogniView
  private https = inject(HttpClient)

  pacientes_sellst(): Observable<ResponseServer> {
    return this.https.get<ResponseServer>(this.url + 'paciente/')
  }

  pacientes_inst(datos: PacienteResponse): Observable<ResponseServer> {
    return this.https.post<ResponseServer>(this.url + 'paciente/', datos)
  }

  paciente_dlt(idPaciente:string): Observable<ResponseServer> {
    return this.https.delete<ResponseServer>(this.url + 'paciente/'+idPaciente)
  }
}
