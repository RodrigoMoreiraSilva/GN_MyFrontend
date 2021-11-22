import { ActiveDirectoryService } from './../../../Services/active-directory.service';
import { Component, OnInit } from '@angular/core';
import { ActiveDirectory } from 'src/app/models/activeDirectory.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-active-directory',
  templateUrl: './active-directory.component.html',
  styleUrls: ['./active-directory.component.css']
})
export class ActiveDirectoryComponent implements OnInit {

  activeDirectoryList: ActiveDirectory[] = [];
  displayedColumns = ['id'
                    ,'name'
                    ,'ldapValue'
                    ,'isActive'
                    ,'Edidar'];

  constructor(private activeDirectoryService: ActiveDirectoryService, private router: Router) { }

  ngOnInit(): void {
    this.activeDirectoryService.Read().subscribe(x => 
      this.activeDirectoryList = x
      )
  }

  NavigateToCadastro(): void {
    this.router.navigate(['activedirectory/cadastro'])
  }
}
