import { Component, OnInit, Input } from '@angular/core';
import { Agreement } from '../../Models/Agreement';
import { Action } from '../../Models/Action';

@Component({
  selector: 'app-agreement',
  templateUrl: './agreement.component.html',
  styleUrls: ['./agreement.component.css']
})
export class AgreementComponent implements OnInit {
  @Input()agreementsList: Agreement[] ;
  agreement: Agreement = new Agreement();
  constructor() { }

  ngOnInit() {
  }

  addNewAgreement() {
    this.agreement.Id = 10;
    this.agreementsList.unshift(this.agreement);
    this.agreement = new Action();
  }
}
