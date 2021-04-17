import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Agency } from 'src/app/Models/Agency';
import { SharedService } from 'src/app/Services/shared.service';
import { Currency } from 'src/app/Models/Currency';

@Component({
  selector: 'app-new-agence',
  templateUrl: './new-agence.component.html',
  styleUrls: ['./new-agence.component.css']
})
export class NewAgenceComponent implements OnInit {
  agency: Agency;
  constructor(private _location: Location, private route: ActivatedRoute, private shared: SharedService) { }

  ngOnInit() {
    this.agency = new Agency();

    this.addNewCurrency();
    this.route.paramMap.subscribe(
      params => {
        let selectedId = Number(params.get('id'));
        if (selectedId) {
          this.agency = this.shared.sharedAgencies.find(agn => agn.Id == selectedId);
        }
      }
    );
  }

  addNewAgency() {
    let agence = this.shared.sharedAgencies.find(agn => agn.Id == this.agency.Id);
    if (agence) {
      let index = this.shared.sharedAgencies.findIndex(agn => agn.Id == agence.Id);
      this.shared.sharedAgencies[index] = this.agency;
    } else {
      this.shared.sharedAgencies.push(this.agency);
    }
    this._location.back();
    localStorage.setItem('agences', JSON.stringify(this.shared.sharedAgencies));
  }

  addNewCurrency() {
    let currency: Currency = new Currency();
    this.agency.Currency.push(currency);

  }
  deleteCurrency(index: number) {
    this.agency.Currency.splice(index, 1);
  }
}
