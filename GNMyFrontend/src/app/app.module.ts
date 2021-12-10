import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/template/header/header.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { FooterComponent } from './components/template/footer/footer.component';
import { NavComponent } from './components/template/nav/nav.component';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { UsuariosComponent } from './components/Gestao/usuarios/usuarios.component';
import { MatCardModule } from '@angular/material/card';
import { RegrasComponent } from './components/Gestao/regras/regras.component';
import { HomeComponent } from './components/home/home.component';
import { UsuariosCadastroComponent } from './components/Gestao/usuarios-cadastro/usuarios-cadastro.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTableModule } from '@angular/material/table';
import { UsuariosUpdateComponent } from './components/Gestao/usuarios-update/usuarios-update.component';
import { RegrasCadastroComponent } from './components/Gestao/regras-cadastro/regras-cadastro.component';
import { RegrasUpdateComponent } from './components/Gestao/regras-update/regras-update.component'
import { MatSelectModule } from '@angular/material/select';
import { LoginComponent } from './components/login/login.component';
import { ActiveDirectoryComponent } from './components/Gestao/active-directory/active-directory.component';
import { ActiveDirectoryCadastroComponent } from './components/Gestao/active-directory-cadastro/active-directory-cadastro.component';
import { ActiveDirectoryUpdateComponent } from './components/Gestao/active-directory-update/active-directory-update.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { DemotechServicosComponent } from './components/Gestao/demotech-servicos/demotech-servicos.component';
import { DemotechServicosCadastroComponent } from './components/Gestao/demotech-servicos-cadastro/demotech-servicos-cadastro.component';
import { DemotechServicosUpdateComponent } from './components/Gestao/demotech-servicos-update/demotech-servicos-update.component';
import { AcessoBIComponent } from './components/acesso-bi/acesso-bi.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    UsuariosComponent,
    RegrasComponent,
    HomeComponent,
    UsuariosCadastroComponent,
    UsuariosUpdateComponent,
    RegrasCadastroComponent,
    RegrasUpdateComponent,
    LoginComponent,
    ActiveDirectoryComponent,
    ActiveDirectoryCadastroComponent,
    ActiveDirectoryUpdateComponent,
    DemotechServicosComponent,
    DemotechServicosCadastroComponent,
    DemotechServicosUpdateComponent,
    AcessoBIComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatSnackBarModule,
    HttpClientModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatTableModule,
    MatSelectModule,
    MatPaginatorModule,
    MatProgressSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
