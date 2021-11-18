import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UsuariosComponent } from "./components/Gestao/usuarios/usuarios.component"; 
import { RegrasComponent } from "./components/Gestao/regras/regras.component";
import { HomeComponent } from "./components/home/home.component";
import { UsuariosCadastroComponent } from './components/Gestao/usuarios-cadastro/usuarios-cadastro.component';
import { UsuariosUpdateComponent } from './components/Gestao/usuarios-update/usuarios-update.component';
import { RegrasCadastroComponent } from './components/Gestao/regras-cadastro/regras-cadastro.component';
import { RegrasUpdateComponent } from './components/Gestao/regras-update/regras-update.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "usuarios",
    component: UsuariosComponent
  },
  {
    path: "regras",
    component: RegrasComponent
  },
  {
    path: "usuarios/cadastro",
    component: UsuariosCadastroComponent
  },
  {
    path: "usuarios/editar/:id",
    component: UsuariosUpdateComponent
  },
  {
    path: "regras/cadastro",
    component: RegrasCadastroComponent
  },
  {
    path: "regras/editar/:id",
    component: RegrasUpdateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
