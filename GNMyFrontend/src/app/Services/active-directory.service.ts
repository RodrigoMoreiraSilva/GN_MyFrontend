import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { ActiveDirectory } from '../models/activeDirectory.model';

@Injectable({
  providedIn: 'root'
})
export class ActiveDirectoryService {

  baseUrl = "https://localhost:44345";
  token = JSON.parse(localStorage.getItem('usuarioAtual')!);
  
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

  Read(): Observable<ActiveDirectory[]> {
    return this.http.get<ActiveDirectory[]>(this.baseUrl + "/api/ActiveDirectoryDomain", this.httpHeader)
  }

  Create(ad: ActiveDirectory): Observable<ActiveDirectory> {
    return this.http.post<ActiveDirectory>(this.baseUrl + "/api/ActiveDirectoryDomain", ad, this.httpHeader)
  }

}
