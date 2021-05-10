import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Agency } from 'src/app/Models/Agency';
import { SharedService } from 'src/app/Services/shared.service';
import { AgencyExchangeRate } from 'src/app/Models/AgencyExchangeRate';
import { SharedApiService } from 'src/app/Services/sharedApi.service';

@Component({
  selector: 'app-new-agence',
  templateUrl: './new-agence.component.html',
  styleUrls: ['./new-agence.component.css']
})
export class NewAgenceComponent implements OnInit {
  agency: Agency;
  constructor(private _location: Location,
     private route: ActivatedRoute, 
     private shared: SharedService,
     private wsAgency: SharedApiService) { }

  ngOnInit() {
    this.agency = new Agency();

    this.addNewCurrency();
    this.route.paramMap.subscribe(
      params => {
        let selectedId = Number(params.get('id'));
        if (selectedId) {
          this.agency = this.shared.sharedAgencies.find(agn => agn.agency_id == selectedId);
        }
      }
    );
  }

  addNewAgency() {
    this.wsAgency.saveAgency(this.agency).subscribe(data=>{
      this._location.back();
    });
  }

  addNewCurrency() {
    let currency: AgencyExchangeRate = new AgencyExchangeRate();
    this.agency.agencyExchangeRates.push(currency);
  }

  deleteCurrency(index: number) {
    this.agency.agencyExchangeRates.splice(index, 1);
  }
}
