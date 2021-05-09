import { Component, OnInit, AfterContentChecked } from '@angular/core';
import { Survay } from '../../Models/Survay';
import { Commentary } from '../../Models/Commentary';
import { InvokeEventService } from '../../Services/invokeEvent.Service';
import { Agreement } from '../../Models/Agreement';
import { SharedService } from 'src/app/Services/shared.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
  userConnected: string = 'coach';

  current: number = 0;
  ListOfSurvey: Survay[] = [];
  nbreOfRated: number = 0;
  nbreOfDimensions: number = 0;
  listOfComme: Commentary[] = [];
  agreementsList: Agreement[];
  type: string = '';
  stepName: string = 'Form';
  opned: boolean = false;

  constructor(private invokeEventService: InvokeEventService, private sharedservice: SharedService, private router: Router) {
    this.invokeEventService.invokeChangeRatedNumber.subscribe(data => {
      if (data == 'changed') {
        this.nbreOfRated = 0;
        for (var i = 0; i < this.ListOfSurvey.length; i++) {
          if (this.ListOfSurvey[i].Rating != 0) {
            this.nbreOfRated++;
          }
        }
      }
    })
  }

  ngOnInit(): void {
    let commentary1: Commentary = new Commentary();
    commentary1.Id = 10;
    let quiz1: Survay = new Survay();
    quiz1.Id = 1;
    quiz1.QuestionTitle = "Delivering Value";
    quiz1.Question = "Good: We deliver great stuff! We're proud of it and our stakeholders are really happy. Bad: We deliver crap. We feel ashamed to deliver it. Our stakeholders hate us.";
    quiz1.Rating = 0;
    quiz1.Commentaryies.push(commentary1)

    let commentary2: Commentary = new Commentary();
    commentary2.Id = 12;
    let quiz2: Survay = new Survay();
    quiz2.Id = 2;
    quiz2.QuestionTitle = "Easy to Release";
    quiz2.Question = "Good: : Releasing is simple, safe, painless and mostly automated.Bad: Releasing is risky, painful, lots of manual work and takes forever.";
    quiz2.Rating = 0;
    quiz2.Commentaryies.push(commentary2);

    let commentary3: Commentary = new Commentary();
    commentary3.Id = 13;
    let quiz3: Survay = new Survay();
    quiz3.Id = 3;
    quiz3.QuestionTitle = "Easy to Release";
    quiz3.Question = "Good: : Releasing is simple, safe, painless and mostly automated.Bad: Releasing is risky, painful, lots of manual work and takes forever.";
    quiz3.Rating = 0;
    quiz3.Commentaryies.push(commentary3);


    let commentary4: Commentary = new Commentary();
    commentary4.Id = 14;
    let quiz4: Survay = new Survay();
    quiz4.Id = 4;
    quiz4.QuestionTitle = "Easy to Release";
    quiz4.Question = "Good: : Releasing is simple, safe, painless and mostly automated.Bad: Releasing is risky, painful, lots of manual work and takes forever.";
    quiz4.Rating = 0;
    quiz4.Commentaryies.push(commentary4)

    let commentary5: Commentary = new Commentary();
    commentary5.Id = 15;
    let quiz5: Survay = new Survay();
    quiz5.Id = 5;
    quiz5.QuestionTitle = "Easy to Release";
    quiz5.Question = "Good: : Releasing is simple, safe, painless and mostly automated.Bad: Releasing is risky, painful, lots of manual work and takes forever.";
    quiz5.Rating = 0;
    quiz5.Commentaryies.push(commentary5)

    let commentary6: Commentary = new Commentary();
    commentary6.Id = 16;
    let quiz6: Survay = new Survay();
    quiz6.Id = 6;
    quiz6.QuestionTitle = "Easy to Release";
    quiz6.Question = "Good: : Releasing is simple, safe, painless and mostly automated.Bad: Releasing is risky, painful, lots of manual work and takes forever.";
    quiz6.Rating = 0;
    quiz6.Commentaryies.push(commentary6)

    let commentary7: Commentary = new Commentary();
    commentary7.Id = 17;
    let quiz7: Survay = new Survay();
    quiz7.Id = 7;
    quiz7.QuestionTitle = "Easy to Release";
    quiz7.Question = "Good: : Releasing is simple, safe, painless and mostly automated.Bad: Releasing is risky, painful, lots of manual work and takes forever.";
    quiz7.Rating = 0;
    quiz7.Commentaryies.push(commentary7)

    let commentary8: Commentary = new Commentary();
    commentary8.Id = 18;
    let quiz8: Survay = new Survay();
    quiz8.Id = 8;
    quiz8.QuestionTitle = "Easy to Release";
    quiz8.Question = "Good: : Releasing is simple, safe, painless and mostly automated.Bad: Releasing is risky, painful, lots of manual work and takes forever.";
    quiz8.Rating = 0;
    quiz8.Commentaryies.push(commentary8)

    let commentary9: Commentary = new Commentary();
    commentary9.Id = 19;
    let quiz9: Survay = new Survay();
    quiz9.Id = 9;
    quiz9.QuestionTitle = "Easy to Release";
    quiz9.Question = "Good: : Releasing is simple, safe, painless and mostly automated.Bad: Releasing is risky, painful, lots of manual work and takes forever.";
    quiz9.Rating = 0;
    quiz9.Commentaryies.push(commentary9)

    this.ListOfSurvey.push(quiz1, quiz2, quiz3, quiz4, quiz5, quiz6, quiz7, quiz8, quiz9);
    this.nbreOfDimensions = this.ListOfSurvey.length;
  }

  public openCloseSideNav(sidenav) {
    sidenav.opened = !sidenav.opened;
  }

  public selectedStep(idStep: number, element, stepName: string) {
    this.current = idStep;
    this.sharedservice.selectedStep(idStep, element)
    this.stepName = stepName;
  }

  getSelectedObject(sendedObj) {
    if (sendedObj.type == 'empty') {
      this.type = '';
      this.listOfComme = [];
      this.agreementsList = [];
    } else if (sendedObj.type == 'agreements') {
      this.agreementsList = sendedObj.list;
    } else if (sendedObj.type == 'comments') {
      this.listOfComme = sendedObj.list;
      let commment: Commentary = new Commentary();
      commment.Id = 1289;
      this.listOfComme.unshift(commment);
    }
    this.type = sendedObj.type;
  }

  logOut() {
    this.sharedservice.logOut();
  }

  openAndcloseParticipantsList() {
    let div = document.getElementById("rightSideConnectedParticipant");
    if (div.style.width != '0%') {
      div.style.width = '0%';
      div.style.padding = '0rem;'
    } else {
      div.style.width = '33%';
      div.style.padding = '1rem;'
    }
    this.opned = !this.opned;
  }

  redirectToSession() {
    this.router.navigate(['/coach/surveys']);
  }
}
