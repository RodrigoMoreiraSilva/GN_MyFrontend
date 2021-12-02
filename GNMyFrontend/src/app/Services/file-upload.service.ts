import { DemotechServico } from './../models/DemotechServico';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {

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

  uploadFile(file: FormData): Observable<any>{
    return this.http.post(this.baseUrl + "/api/File/uploadFile", file, this.httpHeader);
  }

  uploadFileDemotech(file: File, demotech_Servico: DemotechServico): Observable<any>{
    const formData = new FormData();

    formData.append('file', file, file.name);
    formData.append('demotech_Servico', JSON.stringify(demotech_Servico));

    return this.http.post(this.baseUrl + "/api/Demotech_Servico", formData, this.httpHeader);
  }

}
