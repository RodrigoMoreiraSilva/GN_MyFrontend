import { LoginTokenService } from 'src/app/Services/login-token.service';
import { Usuario } from './../models/usuario.model';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  baseUrl = "https://localhost:44345";
  token = JSON.parse(localStorage.getItem('usuarioAtual')!);
    
  httpHeader = {
    headers: new HttpHeaders({
      'Authorization': 'Bearer ' + this.token
    })
  };
   
  constructor(private snackBar: MatSnackBar, private http: HttpClient, private tokenService: LoginTokenService) {
    this.token = localStorage.getItem('usuarioAtual')?? '';
   }
  
  ExibirMensagem(msg: string): void {
    this.snackBar.open(msg,'x', {
      duration: 3000,
      horizontalPosition:"right",
      verticalPosition:"top"
    })
  }

  Create(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(this.baseUrl + "/api/Users/CreateUser", usuario, this.httpHeader);
  }

  Read(): Observable<Usuario[]> {
    this.token =  this.tokenService.RecuperarToken();
    return this.http.get<Usuario[]>(this.baseUrl + "/api/Users/FindAll", this.httpHeader);
  }

  ReadById(id: string): Observable<Usuario> {
    return this.http.get<Usuario>(this.baseUrl + '/api/Users/FindById/' + id, this.httpHeader);
  }

  Update(usuario: Usuario): Observable<Usuario> {
    return this.http.put<Usuario>(this.baseUrl + '/api/Users/AlterUser/' + usuario.id, usuario, this.httpHeader);
  }


}
