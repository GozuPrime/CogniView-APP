import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { ResponseServer } from '../models/response-server';

@Injectable({
  providedIn: 'root'
})
export class PacientesService {

  private url = environment.apiCogniView
  private https = inject(HttpClient)

  pacientes_sellst():Observable<ResponseServer>{
    return this.https.get<ResponseServer>(this.url+'paciente/')
  }
}
