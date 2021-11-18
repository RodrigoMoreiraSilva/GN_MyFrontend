import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { Regra } from '../models/regra.model';

@Injectable({
  providedIn: 'root'
})
export class RegraService {

  baseUrl = "https://localhost:44345";
  token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6IlN1cGVyQWRtaW4iLCJyb2xlIjoiQWRtaW5pc3RyYWRvciIsIm5iZiI6MTYzNzI1MzAzNiwiZXhwIjoxNjM3MjYwMjM2LCJpYXQiOjE2MzcyNTMwMzZ9.-18MzFGmQdPF5Ba5iK69FXlJXDNK7GLH9ytlvX-GBZs";
  
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

  Read(): Observable<Regra[]> {
    return this.http.get<Regra[]>(this.baseUrl + '/api/Roles', this.httpHeader)
  }

  ReadById(id: string): Observable<Regra> {
    return this.http.get<Regra>(this.baseUrl + '/api/Roles/' + id, this.httpHeader)
  }

  Create(regra: Regra): Observable<Regra> {
    return this.http.post<Regra>(this.baseUrl + '/api/Roles', regra, this.httpHeader)
  }

  Update(regra: Regra): Observable<Regra> {
    return this.http.put<Regra>(this.baseUrl + '/api/Roles/' + regra.id, regra, this.httpHeader)
  }

}
