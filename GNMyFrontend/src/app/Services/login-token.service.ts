import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../models/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class LoginTokenService {

  baseUrl = "https://localhost:44345";

  constructor(private http: HttpClient) { }

  GerarToken(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(this.baseUrl + '/api/Login/token', usuario)
  }

  RecuperarToken() {
    let storedToken = localStorage.getItem('usuarioAtual');
    if(!storedToken) throw 'no token found';
    return storedToken;
  }
}
