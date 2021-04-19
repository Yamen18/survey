import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Group } from 'src/app/Models/companies/Group';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})

export class SignUpComponent implements OnInit {
  indeterminate = false;
  labelPosition: 'before' | 'after' = 'after';
  groups: Group[] = [];
  isAnonymous: boolean = false;

  constructor(private router: Router) { }

  ngOnInit() {
    let g1 = new Group();
    g1.Title = "team1";
    let g2 = new Group();
    g2.Title = "team2";
    this.groups.push(g1, g2);
  }

  changeTypeConnection(event) {
    this.isAnonymous = event.checked;
  }
  signUp(){
    this.router.navigate(['']);
  }

}
