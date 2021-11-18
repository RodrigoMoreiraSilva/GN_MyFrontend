import { RegraService } from 'src/app/Services/regra.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Regra } from 'src/app/models/regra.model';

@Component({
  selector: 'app-regras-cadastro',
  templateUrl: './regras-cadastro.component.html',
  styleUrls: ['./regras-cadastro.component.css']
})
export class RegrasCadastroComponent implements OnInit {

  regra: Regra={}

  constructor(private router: Router, private regraService: RegraService) { }

  ngOnInit(): void {
  }

  CriarRegra(): void {
   this.regraService.Create(this.regra).subscribe(() => {
    this.regraService.ExibirMensagem('Cadastrado salvo com sucesso!')
    this.router.navigate(['/regras'])
   })
  }

  Cancel(): void {
    this.router.navigate(['/regras'])
  }

}
