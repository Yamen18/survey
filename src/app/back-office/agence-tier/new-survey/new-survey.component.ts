import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SurveyObj } from 'src/app/Models/template/SurveyObj';
import { SharedService } from 'src/app/Services/shared.service';
import { Location } from '@angular/common';
import { Company } from 'src/app/Models/companies/Company';
import { Coach } from 'src/app/Models/companies/Coach';
import { Template } from 'src/app/Models/template/Tempate';
import { MatDialog } from '@angular/material';
import { PaymentDialogComponent } from '../payment-dialog/payment-dialog.component';

@Component({
  selector: 'app-new-survey',
  templateUrl: './new-survey.component.html',
  styleUrls: ['./new-survey.component.css']
})
export class NewSurveyComponent implements OnInit {
  survey: SurveyObj = new SurveyObj();

  companies: Company[] = [];
  templates: Template[] = [];
  coachs: Coach[] = [];

  constructor(private _location: Location, private route: ActivatedRoute, private shared: SharedService, public dialog: MatDialog) { }

  ngOnInit() {
    this.companies = this.shared.sharedCompanies;
    this.coachs = this.shared.sharedCoachs;
    this.templates = this.shared.sharedtemplate.concat(this.shared.specificTemplate);
    this.route.paramMap.subscribe(
      params => {
        let selectedId = Number(params.get('id'));
        if (selectedId) {
          this.survey = this.shared.sharedSurveys.find(survy => survy.Id == selectedId);
        }
      }
    );
  }

  addNewSurvey() {
    let survey = this.shared.sharedSurveys.find(survy => survy.Id == this.survey.Id);
    if (survey) {
      let index = this.shared.sharedSurveys.findIndex(survy => survy.Id == survey.Id);
      this.shared.sharedSurveys[index] = this.survey;
    } else {
      this.shared.sharedSurveys.push(this.survey);
    }
    this._location.back();
    localStorage.setItem('survey', JSON.stringify(this.shared.sharedSurveys));
  }

  openPaymentDialog() {
    this.dialog.open(PaymentDialogComponent, {
      disableClose: true
    });
  }

}