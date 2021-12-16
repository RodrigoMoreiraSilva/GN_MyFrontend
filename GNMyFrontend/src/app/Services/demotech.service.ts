import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { DemotechServico } from '../models/DemotechServico';

@Injectable({
  providedIn: 'root'
})
export class DemotechService {

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

  Read(useFilter: boolean, isActive: boolean): Observable<DemotechServico[]> {
    return this.http.get<DemotechServico[]>(this.baseUrl + "/api/Demotech_Servico/" + useFilter + "/" + isActive, this.httpHeader)
  }

  ReadById(id: string): Observable<DemotechServico> {
    return this.http.get<DemotechServico>(this.baseUrl + "/api/Demotech_Servico/" + id, this.httpHeader)
  }

  uploadFileDemotech(file: File, demotech_Servico: DemotechServico): Observable<any>{
    const formData = new FormData();

    if(file != null)
      formData.append('file', file, file.name);
    formData.append('demotech_Servico', JSON.stringify(demotech_Servico));

    return this.http.post(this.baseUrl + "/api/Demotech_Servico", formData, this.httpHeader);
  }

  updateFileDemotech(file: File, demotech_Servico: DemotechServico): Observable<any>{
    const formData = new FormData();

    if(file != null)
      formData.append('file', file, file.name);
    
    formData.append('demotech_Servico', JSON.stringify(demotech_Servico));

    return this.http.put(this.baseUrl + "/api/Demotech_Servico/" + demotech_Servico.id, formData, this.httpHeader);
  }

}
