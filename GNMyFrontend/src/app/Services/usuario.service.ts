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
  token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6IlN1cGVyQWRtaW4iLCJyb2xlIjoiQWRtaW5pc3RyYWRvciIsIm5iZiI6MTYzNzI1MzAzNiwiZXhwIjoxNjM3MjYwMjM2LCJpYXQiOjE2MzcyNTMwMzZ9.-18MzFGmQdPF5Ba5iK69FXlJXDNK7GLH9ytlvX-GBZs";
  
  httpHeader = {
    headers: new HttpHeaders({
      'Authorization': 'Bearer ' + this.token
    })
  };
   
  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

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
    return this.http.get<Usuario[]>(this.baseUrl + "/api/Users/FindAll", this.httpHeader);
  }

  ReadById(id: string): Observable<Usuario> {
    return this.http.get<Usuario>(this.baseUrl + '/api/Users/FindById/' + id, this.httpHeader);
  }

  Update(usuario: Usuario): Observable<Usuario> {
    return this.http.put<Usuario>(this.baseUrl + '/api/Users/AlterUser/' + usuario.id, usuario, this.httpHeader);
  }


}
