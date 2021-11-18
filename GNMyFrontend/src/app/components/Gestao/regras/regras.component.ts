import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Regra } from 'src/app/models/regra.model';
import { RegraService } from 'src/app/Services/regra.service';

@Component({
  selector: 'app-regras',
  templateUrl: './regras.component.html',
  styleUrls: ['./regras.component.css']
})
export class RegrasComponent implements OnInit {

  regras: Regra[] = [];
  displayedColumns = ['id'
                    ,'name'
                    ,'isActive'
                    ,'Edidar'];

  constructor(private router: Router, private regraService: RegraService) { }

  ngOnInit(): void {
    this.regraService.Read().subscribe( x => {
      this.regras = x;
    })
  }

  NavigateToCadastro(): void {
    this.router.navigate(['regras/cadastro'])
  }

}
