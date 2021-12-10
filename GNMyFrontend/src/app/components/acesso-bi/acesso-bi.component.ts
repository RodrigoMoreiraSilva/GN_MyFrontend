import { BiService } from './../../Services/bi.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-acesso-bi',
  templateUrl: './acesso-bi.component.html',
  styleUrls: ['./acesso-bi.component.css']
})
export class AcessoBIComponent implements OnInit {

  constructor(private router: Router, private biService: BiService) { }

  ngOnInit(): void {
  }

  NavigateToBI(){
    this.biService.AcessarBI().subscribe(x => {
      window.open(x.biRedirect,"_blank");
    })
  }
}
