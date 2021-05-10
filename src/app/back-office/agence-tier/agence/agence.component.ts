import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/Services/shared.service';

@Component({
  selector: 'app-agence',
  templateUrl: './agence.component.html',
  styleUrls: ['./agence.component.css']
})
export class AgenceComponent implements OnInit {
  userConnected: string;

  constructor(private sharedservice: SharedService) { }

  ngOnInit() {
    this.userConnected = localStorage.getItem("userConnected")
  }

  selectedStep(stepId: number, element) {
    this.sharedservice.selectedStep(stepId, element);
  }

  logOut() {
    this.sharedservice.logOut();
  }
}
