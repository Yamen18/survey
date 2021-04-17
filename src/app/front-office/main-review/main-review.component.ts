import { Component, OnInit } from '@angular/core';
import { Action } from '../../Models/Action';
import { Agreement } from '../../Models/Agreement';

@Component({
  selector: 'app-main-review',
  templateUrl: './main-review.component.html',
  styleUrls: ['./main-review.component.css']
})
export class MainReviewComponent implements OnInit {
  actionsList: Action[] = [];
  action: Action = new Action();
  agreementsList: Agreement[] = [];
  existingActions = [];
  checked = false;
  minDate = new Date();

  constructor() { }

  ngOnInit() {
  }

  addNewProposeAction() {
    this.action.Id = 10;
    this.actionsList.unshift(this.action);
    this.action = new Action();
  }


  changeArticleBaliseClass(selectedElement) {
    if (selectedElement.classList.contains('action-card--completed')) {
      selectedElement.querySelector("svg").classList.add('command--unselected');
      selectedElement.querySelector("svg").classList.remove('command--selected');
      selectedElement.classList.remove('action-card--completed')
    } else {
      selectedElement.querySelector("svg").classList.remove('command--unselected');
      selectedElement.querySelector("svg").classList.add('command--selected');
      selectedElement.classList.add('action-card--completed')
    }
  }

  deleteProposedAction(index: number) {
    this.actionsList.splice(index, 1);
  }

  acceptProposedAction(index: number) {
    let action = this.actionsList[index];
    this.agreementsList.unshift(action);
    this.deleteProposedAction(index);
  }

  rejectedPropose(index: number, selectedElement) {
    this.actionsList[index].Status = 'rejected';
    selectedElement.classList.add("action-card--rejected")
  }
}
