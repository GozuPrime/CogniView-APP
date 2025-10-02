import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { ResponseServer } from '../models/response-server';
import { PacienteResponse } from '../models/paciente/paciente-response';
import { PacienteResponseUpd } from '../models/paciente/paciente-response-upd';
import { AnalisisResponse } from '../models/analisis/analisis-response';

@Injectable({
  providedIn: 'root'
})
export class PacientesService {

  private url = environment.apiCogniView
  private https = inject(HttpClient)

  /* === PACIENTE === */
  pacientes_sellst(): Observable<ResponseServer> {
    return this.https.get<ResponseServer>(this.url + 'paciente/')
  }

  pacientes_inst(datos: PacienteResponse): Observable<ResponseServer> {
    return this.https.post<ResponseServer>(this.url + 'paciente/', datos)
  }

  paciente_dlt(idPaciente: string): Observable<ResponseServer> {
    return this.https.delete<ResponseServer>(this.url + 'paciente/' + idPaciente)
  }

  paciente_sel(idPaciente: string): Observable<ResponseServer> {
    return this.https.get<ResponseServer>(this.url + 'paciente/' + idPaciente)
  }

  paciente_upd(datos: PacienteResponseUpd): Observable<ResponseServer> {
    return this.https.put<ResponseServer>(this.url + 'paciente/', datos)
  }

  /* === PACIENTE -  ANALISIS AI === */
  analisis_inst(datos: AnalisisResponse): Observable<ResponseServer> {
    return this.https.post<ResponseServer>(this.url+'analisis/',datos)
  }

  pacientes_analisis_sellst(): Observable<ResponseServer> {
    return this.https.get<ResponseServer>(this.url + 'paciente/analisis/')
  }

  analisis_precisiones(): Observable<ResponseServer> {
    return this.https.get<ResponseServer>(this.url + 'analisis/precision-grado')
  }

  promedio_Confianza(): Observable<ResponseServer> {
    return this.https.get<ResponseServer>(this.url + 'analisis/promedio-confianza')
  }
}
