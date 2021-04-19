import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Company } from 'src/app/Models/companies/Company';
import { SharedService } from 'src/app/Services/shared.service';
import { Location } from '@angular/common';
import { Group } from 'src/app/Models/companies/Group';
import { Participant } from 'src/app/Models/companies/Participant';
import { InvokeEventService } from 'src/app/Services/invokeEvent.Service';

@Component({
  selector: 'app-new-company',
  templateUrl: './new-company.component.html',
  styleUrls: ['./new-company.component.css']
})
export class NewCompanyComponent implements OnInit {
  company: Company = new Company();
  constructor(private _location: Location, private route: ActivatedRoute, private shared: SharedService
    ,private invokeEventService: InvokeEventService) { }

  ngOnInit() {
    this.addNewGroup();
    this.InitialParticipant();
    this.route.paramMap.subscribe(
      params => {
        let selectedId = Number(params.get('id'));
        if (selectedId) {
          this.company = this.shared.sharedCompanies.find(cmpy => cmpy.Id == selectedId);
        }
      }
    );
  }

  addNewGroup() {
    let group: Group = new Group();
    this.company.Groups.push(group);
  }

  InitialParticipant() {
    // let part: Participant = new Participant();
    // part.FirstName = "yamen";
    // part.LastName = "jeribi";
    // this.company.Participants.push(part);
  }

  deleteGroup(index: number) {
    this.company.Groups.splice(index, 1);
  }

  addNewCompany() {
    let company = this.shared.sharedCompanies.find(cmpy => cmpy.Id == this.company.Id);
    if (company) {
      let index = this.shared.sharedCompanies.findIndex(cmpy => cmpy.Id == company.Id);
      this.shared.sharedCompanies[index] = this.company;
    } else {
      this.shared.sharedCompanies.push(this.company);
    }
    this._location.back();
    localStorage.setItem('companies', JSON.stringify(this.shared.sharedCompanies));
  }

  sendParamets() {
   this.shared.selectedCompany = this.company;
   // this.invokeEventService.invokeSendCompany.next(this.company);
  }
}
