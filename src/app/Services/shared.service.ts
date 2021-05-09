import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Agency } from "../Models/Agency";
import { Coach } from "../Models/companies/Coach";
import { Company } from "../Models/companies/Company";
import { Participant } from "../Models/companies/Participant";
import { SubSession } from "../Models/template/sub-session";
import { Session } from "../Models/template/Session";
import { Template } from "../Models/template/Tempate";
import { VMoney } from "../Models/VMoney";

@Injectable()
export class SharedService {
  sharedtemplate: Template[] = [];
  specificTemplate: Template[] = [];
  sharedVMoney: VMoney[] = [];
  sharedAgencies: Agency[] = [];
  sharedCompanies: Company[] = [];
  sharedCoachs: Coach[] = [];
  sharedSurveys: Session[] = [];
  selectedCompany: Company;
  selectedSession: Session;
  selectedSubSession: SubSession;
  selectedParticipants: Participant[] = [];
  constructor(private router: Router) {
    if (localStorage.getItem("companies") != undefined && localStorage.getItem("companies") != '') {
      this.sharedCompanies = JSON.parse(localStorage.getItem("companies"));
    }
    if (localStorage.getItem("coach") != undefined && localStorage.getItem("coach") != '') {
      this.sharedCoachs = JSON.parse(localStorage.getItem("coach"));
    }
    if (localStorage.getItem("agences") != undefined && localStorage.getItem("agences") != '') {
      this.sharedAgencies = JSON.parse(localStorage.getItem("agences"));
    }
    if (localStorage.getItem("vmoney") != undefined && localStorage.getItem("vmoney") != '') {
      this.sharedCompanies = JSON.parse(localStorage.getItem("vmoney"));
    }
    if (localStorage.getItem("templates") != undefined && localStorage.getItem("templates") != '') {
      this.sharedtemplate = JSON.parse(localStorage.getItem("templates"));
    }
    if (localStorage.getItem("templates-specific") != undefined && localStorage.getItem("templates-specific") != '') {
      this.specificTemplate = JSON.parse(localStorage.getItem("templates-specific"));
    }
    if (localStorage.getItem("survey") != undefined && localStorage.getItem("survey") != '') {
      this.sharedSurveys = JSON.parse(localStorage.getItem("survey"));
    }
  }

  public selectedStep(idStep: number, element) {
    for (var i = 0; i < element.getElementsByTagName('a').length; i++) {
      let stepElement = element.getElementsByTagName('a')[i];
      if (i == idStep) {
        stepElement.classList.remove("command--unselected");
        stepElement.classList.add("command--disabled");
        stepElement.classList.add("command--selected");
        stepElement.classList.add("step-navigation__step--current");
      } else {
        stepElement.classList.add("command--unselected");
        stepElement.classList.remove("command--disabled");
        stepElement.classList.remove("command--selected");
        stepElement.classList.remove("step-navigation__step--current");
      }
    }
  }

  logOut() {
    this.router.navigate(['back/login']);
  }
}