import { Router } from '@angular/router';
import { UsuarioService } from './../../../Services/usuario.service';
import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario.model';
import { Regra } from 'src/app/models/regra.model';
import { RegraService } from 'src/app/Services/regra.service';

@Component({
  selector: 'app-usuarios-cadastro',
  templateUrl: './usuarios-cadastro.component.html',
  styleUrls: ['./usuarios-cadastro.component.css']
})
export class UsuariosCadastroComponent implements OnInit {
  
  usuario: Usuario = { userName: ''};
  roles: Regra[] = [];
  
  constructor(private usuarioService: UsuarioService
    , private router: Router
    , private regraService: RegraService) {   }

  ngOnInit(): void {
    this.regraService.Read().subscribe(x =>
      this.roles = x.filter(x => x.isActive == true)
      );
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
