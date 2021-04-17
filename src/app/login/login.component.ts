import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }
  userName: string = '';
  userPassword: string = '';
  ngOnInit() {
  }

  singIn() {
    if (this.userName == 'editeur') {
      this.router.navigate(['/editeur']);
    } else if (this.userName == 'agence') {
      this.router.navigate(['/agence']);
    } else if (this.userName == 'participant') {
      this.router.navigate(['']);
    }
  }
}
