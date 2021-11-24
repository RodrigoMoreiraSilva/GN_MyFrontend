import { ActiveDirectoryService } from './../../../Services/active-directory.service';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ActiveDirectory } from 'src/app/models/activeDirectory.model';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-active-directory',
  templateUrl: './active-directory.component.html',
  styleUrls: ['./active-directory.component.css']
})
export class ActiveDirectoryComponent implements AfterViewInit, OnInit {

  activeDirectoryList = new MatTableDataSource<ActiveDirectory>([]);
  displayedColumns = ['id'
                    ,'name'
                    ,'ldapValue'
                    ,'observacao'
                    ,'isActive'
                    ,'Edidar'];

  @ViewChild(MatPaginator) private paginator: MatPaginator;

  constructor(private activeDirectoryService: ActiveDirectoryService, private router: Router) { }
  ngAfterViewInit(): void {
    this.activeDirectoryList.paginator = this.paginator;
  }

  ngOnInit(): void {
    this.activeDirectoryService.Read().subscribe(x => 
      this.activeDirectoryList.data = x
      )
  }

  NavigateToCadastro(): void {
    this.router.navigate(['activedirectory/cadastro'])
  }
}
