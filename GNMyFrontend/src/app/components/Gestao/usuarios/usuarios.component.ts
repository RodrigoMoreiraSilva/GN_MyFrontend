import { UsuarioService } from './../../../Services/usuario.service';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario.model';
import { MatPaginator, MatPaginatorIntl } from '@angular/material/paginator'

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements AfterViewInit, OnInit {

  usuarios: Usuario[] = [];
  displayedColumns = ['id'
                    ,'userName'
                    ,'role'
                    ,'isActive'
                    ,'activeDirectoryAuth'
                    ,'passwordExpired'
                    ,'Edidar'];
  
  constructor( private router: Router
    , private usuarioService: UsuarioService
    , private paginatorLabel: MatPaginatorIntl) { }
    
  ngAfterViewInit(): void {
    throw new Error('Method not implemented.');
  }

  ngOnInit(): void {
    this.usuarioService.Read().subscribe(x => {
      this.usuarios = x;
    })
    this.paginatorLabel.itemsPerPageLabel = 'Itens por página:'
  }

  NavigateToCadastro(): void {
    this.router.navigate(['/usuarios/cadastro'])
  }
}
