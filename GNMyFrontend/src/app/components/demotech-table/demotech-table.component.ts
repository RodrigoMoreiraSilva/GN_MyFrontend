import { DemotechServico } from './../../models/DemotechServico';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { DemotechService } from 'src/app/Services/demotech.service';


@Component({
  selector: 'app-demotech-table',
  templateUrl: './demotech-table.component.html',
  styleUrls: ['./demotech-table.component.css']
})
export class DemotechTableComponent implements OnInit {

  demotechServicos!: DemotechServico[]
  demotechServicos1!: DemotechServico[]
  demotechServicos2!: DemotechServico[]
  demotechServicos3!: DemotechServico[]
  demotechServicos4!: DemotechServico[]
  demotechServicos5!: DemotechServico[]
  demotechServicos6!: DemotechServico[]
  demotechServicos7!: DemotechServico[]
  demotechServicos8!: DemotechServico[]

  constructor(private router: Router, private demotechService: DemotechService) { }
  
  ngOnInit(): void {
    this.demotechService.Read(true, true).subscribe( x => {
      this.demotechServicos = x;
      this.demotechServicos1! = x.filter(x => x.categoria == "Diagnóstico e consultoria Especializada") 
      this.demotechServicos2! = x.filter(x => x.categoria == "Implementação")
      this.demotechServicos3! = x.filter(x => x.categoria == "HR Delivery")
      this.demotechServicos4! = x.filter(x => x.categoria == "Relacionamento com o cliente")
      this.demotechServicos5! = x.filter(x => x.categoria == "Tecnologia")
      this.demotechServicos6! = x.filter(x => x.categoria == "Gestão de saúde integrada")
      this.demotechServicos7! = x.filter(x => x.categoria == "Gestão Médica")
      this.demotechServicos8! = x.filter(x => x.categoria == "Soluções Empresariais")
    })
  }

  alerta(){
    alert("Teste!!!")
  }

  NavigateToEdit(id: string): void {
    this.router.navigate(['demotech_servicos/editar/' + id])
  }

  NavigateToCadastro(): void {
    this.router.navigate(['demotech_servicos/cadastro'])
  }

}


