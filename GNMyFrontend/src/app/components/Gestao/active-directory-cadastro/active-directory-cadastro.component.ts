import { ActiveDirectoryService } from './../../../Services/active-directory.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActiveDirectory } from 'src/app/models/activeDirectory.model';

@Component({
  selector: 'app-active-directory-cadastro',
  templateUrl: './active-directory-cadastro.component.html',
  styleUrls: ['./active-directory-cadastro.component.css']
})
export class ActiveDirectoryCadastroComponent implements OnInit {

  activeDirectory: ActiveDirectory = {};

  constructor(private router: Router, private activeDirectoryService: ActiveDirectoryService) { }

  ngOnInit(): void {
  }

  CriarActiveDirectory(): void {
    this.activeDirectoryService.Create(this.activeDirectory).subscribe(() => {
      this.activeDirectoryService.ExibirMensagem('Cadastrado salvo com sucesso!')
      this.router.navigate(['activedirectory'])
    })
  }

  Cancel(): void {
    this.router.navigate(['activedirectory'])
  }
}
