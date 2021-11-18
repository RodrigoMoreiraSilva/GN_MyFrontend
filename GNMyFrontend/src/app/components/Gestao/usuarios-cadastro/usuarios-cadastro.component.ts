import { Router } from '@angular/router';
import { UsuarioService } from './../../../Services/usuario.service';
import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario.model';

@Component({
  selector: 'app-usuarios-cadastro',
  templateUrl: './usuarios-cadastro.component.html',
  styleUrls: ['./usuarios-cadastro.component.css']
})
export class UsuariosCadastroComponent implements OnInit {
  
  usuario: Usuario = {};

  constructor(private usuarioService: UsuarioService, private router: Router) {   }

  ngOnInit(): void {
  }

  CriarUsuario(): void {
    this.usuarioService.Create(this.usuario).subscribe(() => {
      this.usuarioService.ExibirMensagem('Cadastrado salvo com sucesso!')
      this.router.navigate(['/usuarios'])
    });
    
  }

  Cancel(){
    this.router.navigate(['/usuarios'])
  }

}
