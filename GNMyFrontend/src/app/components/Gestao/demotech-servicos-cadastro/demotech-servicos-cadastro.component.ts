import { DemotechServico } from './../../../models/DemotechServico';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DemotechService } from 'src/app/Services/demotech.service';

@Component({
  selector: 'app-demotech-servicos-cadastro',
  templateUrl: './demotech-servicos-cadastro.component.html',
  styleUrls: ['./demotech-servicos-cadastro.component.css']
})
export class DemotechServicosCadastroComponent implements OnInit {

  demotechServico: DemotechServico = { tipoServico:"", categoria:"", isActive: true}
  file!: File;

  constructor(private router: Router, private demotechService: DemotechService) { }

  ngOnInit(): void {
  }

  CriarDemotechServico(){
    this.demotechService.uploadFileDemotech(this.file, this.demotechServico).subscribe(() => {
      this.demotechService.ExibirMensagem("Upload Demotech realizado")
    })
    this.router.navigate(['/demotech_servicos']);
  }

  inputFileChange(event: Event) {
    const input = event.target as HTMLInputElement;

    if (!input.files?.length) {
        return;
    }
    this.file = input.files[0];    
  }

  Cancel(): void {
    this.router.navigate(['/demotech_servicos'])
  }
}
