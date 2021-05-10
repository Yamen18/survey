import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Coach } from 'src/app/Models/companies/Coach';
import { ActivatedRoute } from '@angular/router';
import { SharedService } from 'src/app/Services/shared.service';
import { SharedApiService } from 'src/app/Services/sharedApi.service';

@Component({
  selector: 'app-new-coach',
  templateUrl: './new-coach.component.html',
  styleUrls: ['./new-coach.component.css']
})
export class NewCoachComponent implements OnInit {
  coach: Coach = new Coach();
  constructor(private _location: Location,
    private route: ActivatedRoute,
    private shared: SharedService,
    private wsCoachService: SharedApiService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(
      params => {
        let selectedId = Number(params.get('id'));
        if (selectedId) {
          this.coach = this.shared.sharedCoachs.find(coach => coach.coach_id == selectedId);
        }
      }
    );
  }

  addNewCoach() {
    this.wsCoachService.saveCoach(this.coach).subscribe(data => {
      this._location.back();
    });
  }
}
