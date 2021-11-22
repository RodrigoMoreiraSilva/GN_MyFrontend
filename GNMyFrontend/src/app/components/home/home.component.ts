import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario.model';
import { LoginTokenService } from 'src/app/Services/login-token.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  usuario: Usuario = { userName: '',
  token: JSON.parse(localStorage.getItem('usuarioAtual')!)};
 
  constructor(private loginTokenService: LoginTokenService, private router: Router) { }

  ngOnInit(): void {

  }

  Login(): void {
    this.loginTokenService.GerarToken(this.usuario).subscribe(x =>
      localStorage.setItem('usuarioAtual', JSON.stringify(x.token))
      )
    this.usuario.token = JSON.parse(localStorage.getItem('usuarioAtual')!);

    if(this.usuario.token != null){
      this.loginTokenService.ExibirMensagem("Bem vindo, "+ this.usuario.userName +"!")
      this.router.navigate(['/'])
    }
    else
    this.loginTokenService.ExibirMensagem("Opss... "+ this.usuario.userName + ", parece que algo deu errado, tente novamente...")
  }

  Logout(): void {
    localStorage.removeItem('usuarioAtual');
    localStorage.removeItem('usernameAtual');
    this.usuario.token = '';
    this.loginTokenService.ExibirMensagem("Até breve!")
    this.router.navigate(['/'])
    location.reload()
  }

  
}

