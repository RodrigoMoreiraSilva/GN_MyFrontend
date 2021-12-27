import { DemotechServico } from './../../../models/DemotechServico';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { DemotechService } from 'src/app/Services/demotech.service';

@Component({
  selector: 'app-demotech-servicos',
  templateUrl: './demotech-servicos.component.html',
  styleUrls: ['./demotech-servicos.component.css']
})
export class DemotechServicosComponent implements AfterViewInit, OnInit {

  demotechServicos = new MatTableDataSource<DemotechServico>([]);

  displayedColumns = ['id'
                    ,'tipoServico'
                    ,'categoria'
                    ,'descricao'
                    ,'documentName'
                    ,'docUrl'
                    ,'observacao'
                    ,'isActive'
                    ,'Edidar'];

  @ViewChild(MatPaginator) private paginator: MatPaginator;

  constructor(private router: Router, private demotechService: DemotechService) { }
  
  ngAfterViewInit(): void {
    this.demotechServicos.paginator = this.paginator;
  }

  ngOnInit(): void {
    this.demotechService.Read(false, true).subscribe( x => {
      this.demotechServicos.data = x;
    })
  }

  NavigateToCadastro(): void {
    this.router.navigate(['demotech_servicos/cadastro'])
  }

}
