import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BiService {

  baseUrl = "https://localhost:44345";
  token = JSON.parse(localStorage.getItem('usuarioAtual')!);
  username = JSON.parse(localStorage.getItem('usernameAtual')!);
  
  httpHeader = {
    headers: new HttpHeaders({
      'Authorization': 'Bearer ' + this.token
    })
  };
  
  constructor(private http: HttpClient, private snackBar: MatSnackBar) { }

  ExibirMensagem(msg: string): void {
    this.snackBar.open(msg,'x', {
      duration: 3000,
      horizontalPosition:"right",
      verticalPosition:"top"
    })
  }

  AcessarBI(): Observable<any> {
    return this.http.get<any>(this.baseUrl + "/api/bi/acessarbi/" + this.username,this.httpHeader)
  }

}
