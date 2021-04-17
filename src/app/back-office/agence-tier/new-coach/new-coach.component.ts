import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Coach } from 'src/app/Models/companies/Coach';
import { ActivatedRoute } from '@angular/router';
import { SharedService } from 'src/app/Services/shared.service';

@Component({
  selector: 'app-new-coach',
  templateUrl: './new-coach.component.html',
  styleUrls: ['./new-coach.component.css']
})
export class NewCoachComponent implements OnInit {
  coach:Coach=new Coach();
  constructor(private _location: Location, private route: ActivatedRoute, private shared: SharedService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(
      params => {
        let selectedId = Number(params.get('id'));
        if (selectedId) {
          this.coach = this.shared.sharedCoachs.find(coach => coach.Id == selectedId);
        }
      }
    );
  }

  addNewCoach() {
    let coach = this.shared.sharedCoachs.find(coach => coach.Id == this.coach.Id);
    if (coach) {
      let index = this.shared.sharedCoachs.findIndex(coach => coach.Id == coach.Id);
      this.shared.sharedCoachs[index] = this.coach;
    } else {
      this.shared.sharedCoachs.push(this.coach);
    }
    this._location.back();
    localStorage.setItem('coach', JSON.stringify(this.shared.sharedCoachs));
  }

}
