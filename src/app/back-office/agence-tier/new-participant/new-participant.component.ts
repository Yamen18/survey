import { Component, OnInit } from '@angular/core';
import { Group } from 'src/app/Models/companies/Group';
import { Participant } from 'src/app/Models/companies/Participant';
import { SharedService } from 'src/app/Services/shared.service';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-new-participant',
  templateUrl: './new-participant.component.html',
  styleUrls: ['./new-participant.component.css']
})
export class NewParticipantComponent implements OnInit {
  participant: Participant = new Participant();
  groups: Group[] = [];
  constructor(private shared:SharedService,private _location: Location, private route: ActivatedRoute) {
    this.groups =  this.shared.selectedCompany.Groups;
   }

  ngOnInit() {
    this.route.paramMap.subscribe(
      params => {
        let selectedId = Number(params.get('idParticipant'));
        if (selectedId) {
          this.participant = this.shared.selectedCompany.Participants.find(p => p.Id == selectedId);
        }
      }
    );
  }

  addNewParticipant() {
    let participant = this.shared.selectedCompany.Participants.find(p => p.Id == this.participant.Id);
    if (participant) {
      let index = this.shared.selectedCompany.Participants.findIndex(p => p.Id == participant.Id);
      this.shared.selectedCompany.Participants[index] = this.participant;
    } else {
      this.shared.selectedCompany.Participants.push(this.participant);
    }
    this._location.back();
  }
}
