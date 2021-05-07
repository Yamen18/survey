import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/Services/shared.service';

@Component({
  selector: 'app-coach',
  templateUrl: './coach.component.html',
  styleUrls: ['./coach.component.css']
})
export class CoachComponent implements OnInit {
  userConnected: string = 'Yamen';
  constructor(private sharedservice: SharedService) { }

  ngOnInit() {
  }

  selectedStep(stepId: number, element) {
    this.sharedservice.selectedStep(stepId, element);
  }

  logOut() {
    this.sharedservice.logOut();
  }
}
