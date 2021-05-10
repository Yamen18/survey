import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/Services/shared.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editeur',
  templateUrl: './editeur.component.html',
  styleUrls: ['./editeur.component.css']
})
export class EditeurComponent implements OnInit {
  userConnected: string;

  constructor(private sharedservice: SharedService) { }

  ngOnInit() {
    this.userConnected = localStorage.getItem("userConnected");
  }

  selectedStep(stepId: number, element) {
    this.sharedservice.selectedStep(stepId, element);
  }

  logOut() {
    this.sharedservice.logOut();
  }
}
