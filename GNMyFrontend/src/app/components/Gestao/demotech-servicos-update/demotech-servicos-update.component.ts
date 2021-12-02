import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DemotechServico } from 'src/app/models/DemotechServico';
import { DemotechService } from 'src/app/Services/demotech.service';

@Component({
  selector: 'app-demotech-servicos-update',
  templateUrl: './demotech-servicos-update.component.html',
  styleUrls: ['./demotech-servicos-update.component.css']
})
export class DemotechServicosUpdateComponent implements OnInit {

  demotechServico: DemotechServico = { tipoServico:"", categoria:"", isActive: true}
  file!: File;
  
  constructor(private router: Router, private route: ActivatedRoute, private demotechService: DemotechService) { }

  ngOnInit(): void {
    const i = this.route.snapshot.paramMap.get('id');
    let id = i != null ? i : '0';
    this.demotechService.ReadById(id).subscribe(x => {
      this.demotechServico = x
    })
  }

  AlterarDemotechServico(){
    this.demotechService.updateFileDemotech(this.file, this.demotechServico).subscribe(() => {
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
