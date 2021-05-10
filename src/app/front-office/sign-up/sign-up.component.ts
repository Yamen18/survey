import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Group } from 'src/app/Models/companies/Group';
import { InvokeEventService } from 'src/app/Services/invokeEvent.Service';
import { RealTimeDataService } from 'src/app/Services/RealTimeData.service';

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
  isStarted: boolean = false;
  constructor(private router: Router, private invokeEvent: InvokeEventService,private realTimeData: RealTimeDataService) {
    if (localStorage.getItem("isStarted") != undefined) {
      if (localStorage.getItem("isStarted") == 'true') {
        this.isStarted = true;
      }
    } else {
      localStorage.setItem("isStarted", 'false');
    }
  }

  ngOnInit() {
    this.invokeEvent.startSession.subscribe(data => {
      if (data == 'isStarted') {
        this.signUp();
      }
    })
    let g1 = new Group();
    g1.name = "team1";
    let g2 = new Group();
    g2.name = "team2";
    this.groups.push(g1, g2);
  }

  changeTypeConnection(event) {
    this.isAnonymous = event.checked;
  }

  setParticipantInformation: boolean = false;
  signUp() {
    if (localStorage.getItem("isStarted") == "true") {
      this.invokeEvent.user.next("participant")
      this.router.navigate(['']);
    } else {
      this.setParticipantInformation = true;
    }
  }

}
