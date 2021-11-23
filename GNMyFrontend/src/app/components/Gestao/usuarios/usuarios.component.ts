import { UsuarioService } from './../../../Services/usuario.service';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario.model';
import { MatPaginator, MatPaginatorIntl } from '@angular/material/paginator'
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements AfterViewInit, OnInit {

  usuarios = new MatTableDataSource<Usuario>([]);

  displayedColumns = ['id'
                    ,'userName'
                    ,'role'
                    ,'isActive'
                    ,'activeDirectoryAuth'
                    ,'passwordExpired'
                    ,'Edidar'];
  
  @ViewChild(MatPaginator) private paginator: MatPaginator;

  constructor( private router: Router
    , private usuarioService: UsuarioService
    , private paginatorLabel: MatPaginatorIntl) { }

  ngAfterViewInit(): void {
    this.usuarios.paginator = this.paginator;
  }

  ngOnInit(): void {
    this.usuarioService.Read().subscribe(x => {
     this.usuarios.data = x;
    });
    this.paginatorLabel.itemsPerPageLabel = 'Itens por página:';
    this.paginatorLabel.nextPageLabel = 'Próximo';
    this.paginatorLabel.previousPageLabel = 'Anterior';
  }

  NavigateToCadastro(): void {
    this.router.navigate(['/usuarios/cadastro'])
  }
}
