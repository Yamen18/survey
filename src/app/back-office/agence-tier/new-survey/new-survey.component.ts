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
import { InvokeEventService } from 'src/app/Services/invokeEvent.Service';
import { QrCodeGenerateurDialogComponent } from '../qr-code-generateur-dialog/qr-code-generateur-dialog.component';

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

  indeterminate = false;
  labelPosition: 'before' | 'after' = 'after';

  constructor(private _location: Location, private route: ActivatedRoute,
    private shared: SharedService, public dialog: MatDialog, private invokeEvent: InvokeEventService) {
    // this.invokeEvent.approuvePayment.subscribe(data => {
    //   this.survey.IsPayed = true;
    // })
  }

  ngOnInit() {
    this.companies = this.shared.sharedCompanies;
    this.coachs = this.shared.sharedCoachs;
    this.templates = this.shared.sharedtemplate.concat(this.shared.specificTemplate);
    this.selectedSession();
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

  openQrCodeDialog() {
    this.dialog.open(QrCodeGenerateurDialogComponent, {
      disableClose: false
    });
  }

  selectedSession() {
    this.shared.selectedSession = this.survey;
  }

  back() {
    this._location.back();
  }
}
