import { ActiveDirectoryService } from './../../../Services/active-directory.service';
import { ActiveDirectory } from 'src/app/models/activeDirectory.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-active-directory-update',
  templateUrl: './active-directory-update.component.html',
  styleUrls: ['./active-directory-update.component.css']
})
export class ActiveDirectoryUpdateComponent implements OnInit {

  activeDirectory: ActiveDirectory = {};

  constructor(private router: Router, private route: ActivatedRoute, private activeDirectoryService: ActiveDirectoryService) { }

  ngOnInit(): void {
    const i = this.route.snapshot.paramMap.get('id');
    let id = i != null ? i : '0';
    this.activeDirectoryService.ReadById(id).subscribe(x =>
      this.activeDirectory = x
    );
  }

  AlterarActiveDirectory(){
      this.activeDirectoryService.Update(this.activeDirectory).subscribe(() => {
        this.activeDirectoryService.ExibirMensagem('Edição salva com sucesso!')
        this.router.navigate(['/activedirectory'])
      })
  }

  Cancel():void {
    this.router.navigate(['/activedirectory'])
  }

}
