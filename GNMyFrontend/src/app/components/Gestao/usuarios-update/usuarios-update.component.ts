import { UsuarioService } from './../../../Services/usuario.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario.model';
import { Regra } from 'src/app/models/regra.model';
import { RegraService } from 'src/app/Services/regra.service';

@Component({
  selector: 'app-usuarios-update',
  templateUrl: './usuarios-update.component.html',
  styleUrls: ['./usuarios-update.component.css']
})
export class UsuariosUpdateComponent implements OnInit {

  usuario: Usuario = { userName: ''};
  roles: Regra[] = [];

  constructor(private router: Router
    , private route: ActivatedRoute
    , private usuarioService: UsuarioService
    , private regraService: RegraService) { }

  ngOnInit(): void {
    const i = this.route.snapshot.paramMap.get('id');
    let id = i != null ? i : '0';
    
    this.usuarioService.ReadById(id).subscribe(x =>
      this.usuario = x  
      );
    
    this.regraService.Read().subscribe(x =>
      this.roles = x.filter(x => x.isActive == true)
      );
  }

  AlterarUsuario(): void {
    this.usuarioService.Update(this.usuario).subscribe(() => {
    this.usuarioService.ExibirMensagem('Edição salva com sucesso!')
    this.router.navigate(['/usuarios'])
    })
    
  }

  Cancel(): void {
    this.router.navigate(['/usuarios'])
  }

}
