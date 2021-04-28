import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/Services/shared.service';

@Component({
  selector: 'app-agence',
  templateUrl: './agence.component.html',
  styleUrls: ['./agence.component.css']
})
export class AgenceComponent implements OnInit {
  userConnected: string = 'agence';

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
