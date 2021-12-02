import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UsuariosComponent } from "./components/Gestao/usuarios/usuarios.component"; 
import { RegrasComponent } from "./components/Gestao/regras/regras.component";
import { HomeComponent } from "./components/home/home.component";
import { UsuariosCadastroComponent } from './components/Gestao/usuarios-cadastro/usuarios-cadastro.component';
import { UsuariosUpdateComponent } from './components/Gestao/usuarios-update/usuarios-update.component';
import { RegrasCadastroComponent } from './components/Gestao/regras-cadastro/regras-cadastro.component';
import { RegrasUpdateComponent } from './components/Gestao/regras-update/regras-update.component';
import { LoginComponent } from './components/login/login.component';
import { ActiveDirectoryComponent } from './components/Gestao/active-directory/active-directory.component';
import { ActiveDirectoryCadastroComponent } from './components/Gestao/active-directory-cadastro/active-directory-cadastro.component';
import { ActiveDirectoryUpdateComponent } from './components/Gestao/active-directory-update/active-directory-update.component';
import { UploadFileComponent } from './components/upload-file/upload-file.component';
import { DemotechServicosComponent } from './components/Gestao/demotech-servicos/demotech-servicos.component';
import { DemotechServicosCadastroComponent } from './components/Gestao/demotech-servicos-cadastro/demotech-servicos-cadastro.component';


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
  },
  //{
  //  path: "login",
  //  component: LoginComponent
  //},
  {
    path: "activedirectory",
    component: ActiveDirectoryComponent
  },
  {
    path: "activedirectory/cadastro",
    component: ActiveDirectoryCadastroComponent
  },
  {
    path: "activedirectory/editar/:id",
    component: ActiveDirectoryUpdateComponent
  },
  {
    path: "uploadfile",
    component: UploadFileComponent
  },
  {
    path: "demotech_servicos",
    component: DemotechServicosComponent
  },
  {
    path: "demotech_servicos/cadastro",
    component: DemotechServicosCadastroComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
