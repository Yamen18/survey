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
      localStorage.setItem("userConnected", "editeur");
    } else if (this.userName == 'agence') {
      this.router.navigate(['/agence']);
      localStorage.setItem("userConnected", "agency");
    } else if(this.userName == 'coach'){
      this.router.navigate(['/coach/surveys']);
      localStorage.setItem("userConnected", "coach");
    }
  }
}
