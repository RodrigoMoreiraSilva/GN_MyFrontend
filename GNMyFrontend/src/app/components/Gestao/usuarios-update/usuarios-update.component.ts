import { UsuarioService } from './../../../Services/usuario.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario.model';

@Component({
  selector: 'app-usuarios-update',
  templateUrl: './usuarios-update.component.html',
  styleUrls: ['./usuarios-update.component.css']
})
export class UsuariosUpdateComponent implements OnInit {

  usuario: Usuario = {};

  constructor(private router: Router, private route: ActivatedRoute, private usuarioService: UsuarioService) { }

  ngOnInit(): void {
    const i = this.route.snapshot.paramMap.get('id');
    let id = i != null ? i : '0';
    this.usuarioService.ReadById(id).subscribe(x =>
      this.usuario = x  
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
