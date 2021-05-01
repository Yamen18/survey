import { Component, OnInit } from '@angular/core';
import { Coach } from 'src/app/Models/companies/Coach';
import { Group } from 'src/app/Models/companies/Group';
import { SubSession } from 'src/app/Models/template/sub-session';
import { Template } from 'src/app/Models/template/Tempate';
import { SharedService } from 'src/app/Services/shared.service';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-new-sub-session',
  templateUrl: './new-sub-session.component.html',
  styleUrls: ['./new-sub-session.component.css']
})
export class NewSubSessionComponent implements OnInit {

  sub_session: SubSession = new SubSession();
  templates: Template[] = [];
  coachs: Coach[] = [];
  constructor(private shared: SharedService, private _location: Location, private route: ActivatedRoute) { }

  ngOnInit() {
    this.coachs = this.shared.sharedCoachs;
    this.templates = this.shared.sharedtemplate.concat(this.shared.specificTemplate);

    this.route.paramMap.subscribe(
      params => {
        let selectedId = Number(params.get('idSubsession'));
        if (selectedId) {
          this.sub_session = this.shared.selectedSession.Sub_session.find(session => session.Id == selectedId);
        }
      }
    );
  }

  addNewSubSession() {
    let session = this.shared.selectedSession.Sub_session.find(ss => ss.Id == this.sub_session.Id);
    if (session) {
      let index = this.shared.selectedSession.Sub_session.findIndex(ss => ss.Id == session.Id);
      this.shared.selectedSession.Sub_session[index] = this.sub_session;
    } else {
      this.shared.selectedSession.Sub_session.push(this.sub_session);
    }
    this.back();
  }



  sendParamets() {
    this.shared.selectedParticipants = this.sub_session.Participants;
  }

  back() {
    this._location.back();
  }
}
