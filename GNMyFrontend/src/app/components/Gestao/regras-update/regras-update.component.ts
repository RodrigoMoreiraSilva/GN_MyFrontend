import { RegraService } from 'src/app/Services/regra.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Regra } from 'src/app/models/regra.model';

@Component({
  selector: 'app-regras-update',
  templateUrl: './regras-update.component.html',
  styleUrls: ['./regras-update.component.css']
})
export class RegrasUpdateComponent implements OnInit {

  regra: Regra={};

  constructor(private router: Router, private regraService: RegraService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const i = this.route.snapshot.paramMap.get('id');
    let id = i != null ? i : '0';
    this.regraService.ReadById(id).subscribe(x =>
      this.regra = x
    );
  }

  AlterarRegra(): void {
    const i = this.route.snapshot.paramMap.get('id');
    let id = i != null ? i : '0';
      this.regraService.Update(this.regra).subscribe(() => {
        this.regraService.ExibirMensagem('Edição salva com sucesso!')
        this.router.navigate(['/regras'])
      })
  }

  Cancel(): void {
    this.router.navigate(['/regras'])
  }
}
