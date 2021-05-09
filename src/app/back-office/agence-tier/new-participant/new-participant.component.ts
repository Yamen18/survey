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
   // this.groups =  this.shared.selectedSubSession.Groups;
   }

  ngOnInit() {
    this.route.paramMap.subscribe(
      params => {
        let selectedId = Number(params.get('idParticipant'));
        if (selectedId) {
          this.participant = this.shared.selectedSubSession.participants.find(p => p.participant_id == selectedId);
        }
      }
    );
  }

  addNewParticipant() {
    let participant = this.shared.selectedSubSession.participants.find(p => p.participant_id == this.participant.participant_id);
    if (participant) {
      let index = this.shared.selectedSubSession.participants.findIndex(p => p.participant_id == participant.participant_id);
      this.shared.selectedSubSession.participants[index] = this.participant;
    } else {
      this.shared.selectedSubSession.participants.push(this.participant);
    }
    this._location.back();
  }
}
