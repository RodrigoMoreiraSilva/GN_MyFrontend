import { Router } from '@angular/router';
import { LoginTokenService } from './../../../Services/login-token.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  usuario = JSON.parse(localStorage.getItem('usernameAtual')!);

  constructor(private loginTokenService: LoginTokenService, private router: Router) { }

  ngOnInit(): void {
  }

  Logout(): void {
    localStorage.removeItem('usuarioAtual');
    localStorage.removeItem('usernameAtual');
    this.loginTokenService.ExibirMensagem("Até breve!")
    this.router.navigate(['/login'])
    location.reload()
  }

}
