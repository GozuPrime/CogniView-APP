import { inject, Injectable } from '@angular/core';
import { StorageService } from './storage.service';
import { jwtDecode } from 'jwt-decode';
import { Login } from '../models/auth/login';
import { environment } from 'src/environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ResponseServer } from '../models/response-server';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url = environment.apiCogniView
  private https = inject(HttpClient)
  private storageServices = inject(StorageService)

  login(datos:Login):Observable<ResponseServer>{
    return this.https.post<ResponseServer>(this.url+'auth/',datos)
  }

  isLoggeIn() {
    const token = this.getToken()
    if (!token) return false

    return !this.isTokenExpired()
  }

  private isTokenExpired() {
    const token = this.getToken()
    if (!token) return true

    const decode = jwtDecode(token)
    const isTokenExpired = Date.now() >= decode['exp']! * 1000
    if (isTokenExpired) this.logout()

    return isTokenExpired
  }

  logout() {
    this.storageServices.removerStorage('tokenPaciente')
  }

  private getToken() {
    return this.storageServices.getStorage('tokenPaciente')
  }

}
