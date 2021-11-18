import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario.model';
import { LoginTokenService } from 'src/app/Services/login-token.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  usuario: Usuario = { userName: ''};
  private tokenKey:string = 'app_token';

  constructor(private loginTokenService: LoginTokenService) { }

  ngOnInit(): void {
  }

  Login(): void {
    this.loginTokenService.GerarToken(this.usuario).subscribe(x =>
      localStorage.setItem('usuarioAtual', JSON.stringify(x.token))
      )
    this.usuario.token = JSON.parse(localStorage.getItem('usuarioAtual')!);
  }

  
}

