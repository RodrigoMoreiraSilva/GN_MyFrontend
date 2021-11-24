import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Regra } from 'src/app/models/regra.model';
import { RegraService } from 'src/app/Services/regra.service';

@Component({
  selector: 'app-regras',
  templateUrl: './regras.component.html',
  styleUrls: ['./regras.component.css']
})
export class RegrasComponent implements AfterViewInit, OnInit {

  regras = new MatTableDataSource<Regra>([]);

  displayedColumns = ['id'
                    ,'name'
                    ,'observacao'
                    ,'isActive'
                    ,'Edidar'];

  @ViewChild(MatPaginator) private paginator: MatPaginator;

  constructor(private router: Router, private regraService: RegraService) { }
  ngAfterViewInit(): void {
    this.regras.paginator = this.paginator;
  }

  ngOnInit(): void {
    this.regraService.Read().subscribe( x => {
      this.regras.data = x;
    })
  }

  NavigateToCadastro(): void {
    this.router.navigate(['regras/cadastro'])
  }

}
