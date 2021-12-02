import { DemotechServico } from '../../models/DemotechServico';
import { FileUploadService } from './../../Services/file-upload.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.css']
})
export class UploadFileComponent implements OnInit {
 
  demotechServico: DemotechServico = { tipoServico: "", categoria: "", isActive: true};

  constructor( private fileUploadService: FileUploadService){}
   

  ngOnInit(): void {
  }

  inputFileChange(event: Event) {
    const input = event.target as HTMLInputElement;

    if (!input.files?.length) {
        return;
    }
    const file = input.files[0];
    console.log(file);
    
    const formData = new FormData();
    formData.append('file', file);
    
    this.fileUploadService.uploadFile(formData).subscribe(() => {
        this.fileUploadService.ExibirMensagem("Upload realizado")
      })
  }

  inputFileChangeDemotech(event: Event) {
    const input = event.target as HTMLInputElement;

    this.demotechServico.tipoServico = "Consultoria";
    this.demotechServico.categoria = "Serviços";
    this.demotechServico.descricao = "Teste"

    if (!input.files?.length) {
        return;
    }
    const file = input.files[0];
    
    this.fileUploadService.uploadFileDemotech(file, this.demotechServico).subscribe(() => {
        this.fileUploadService.ExibirMensagem("Upload Demotech realizado")
      })
  }
  
}
