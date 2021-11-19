import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { Usuario } from '../models/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class LoginTokenService {

  baseUrl = "https://localhost:44345";

  constructor(private http: HttpClient, private snackBar: MatSnackBar) { }

  GerarToken(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(this.baseUrl + '/api/Login/token', usuario)
  }

  RecuperarToken() {
    let storedToken = localStorage.getItem('usuarioAtual');
    if(!storedToken) throw 'no token found';
    return storedToken;
  }

  ExibirMensagem(msg: string): void {
    this.snackBar.open(msg,'x', {
      duration: 3000,
      horizontalPosition:"right",
      verticalPosition:"top"
    })
  }
}
