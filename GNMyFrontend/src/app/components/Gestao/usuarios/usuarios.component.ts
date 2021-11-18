import { UsuarioService } from './../../../Services/usuario.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario.model';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  usuarios: Usuario[] = [];
  displayedColumns = ['id'
                    ,'userName'
                    ,'role'
                    ,'isActive'
                    ,'activeDirectoryAuth'
                    ,'passwordExpired'
                    ,'Edidar'];

  constructor( private router: Router, private usuarioService: UsuarioService) { }

  ngOnInit(): void {
    this.usuarioService.Read().subscribe(x => {
      this.usuarios = x;
      console.log(this.usuarios);
    })
  }

  NavigateToCadastro(): void {
    this.router.navigate(['/usuarios/cadastro'])
  }
}
