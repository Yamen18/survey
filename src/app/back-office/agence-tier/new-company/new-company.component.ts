import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Company } from 'src/app/Models/companies/Company';
import { SharedService } from 'src/app/Services/shared.service';
import { Location } from '@angular/common';
import { Group } from 'src/app/Models/companies/Group';

@Component({
  selector: 'app-new-company',
  templateUrl: './new-company.component.html',
  styleUrls: ['./new-company.component.css']
})
export class NewCompanyComponent implements OnInit {
  company: Company = new Company();
  constructor(private _location: Location, private route: ActivatedRoute, private shared: SharedService) { }

  ngOnInit() {
    this.addNewGroup();
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

}
