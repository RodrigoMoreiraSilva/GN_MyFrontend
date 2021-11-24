import { ActiveDirectoryService } from './../../Services/active-directory.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActiveDirectory } from 'src/app/models/activeDirectory.model';
import { Usuario } from 'src/app/models/usuario.model';
import { LoginTokenService } from 'src/app/Services/login-token.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario: Usuario = { userName: ''};
  activeDirectoryList: ActiveDirectory[] = [];
  
  constructor(private loginTokenService: LoginTokenService
    , private activeDirectoryService: ActiveDirectoryService
    , private toastr: ToastrService) { }

  ngOnInit(): void {
    this.activeDirectoryService.Read().subscribe(x =>
      this.activeDirectoryList = x.filter(ad => ad.isActive == true)     
      )
  }

  showSuccess() {
    this.toastr.success('Hello world!', 'Toastr fun!');
  }

  Login(): void 
  {
    this.loginTokenService.GerarToken(this.usuario).subscribe(x => {
        if(x != null)
        {
          localStorage.setItem('usuarioAtual', JSON.stringify(x.token))
          localStorage.setItem('usernameAtual',JSON.stringify(this.usuario.userName))
          location.reload()
        }
        else
        {
          this.loginTokenService.ExibirMensagem("Opss... "+ this.usuario.userName + ", parece que algo deu errado, tente novamente...")
        }
      });        
  }
}
