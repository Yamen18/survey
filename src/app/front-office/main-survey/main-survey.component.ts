import { Component, OnInit, Input } from '@angular/core';
import { Survay } from '../../Models/Survay';
import { Commentary } from '../../Models/Commentary';

@Component({
  selector: 'app-main-survey',
  templateUrl: './main-survey.component.html',
  styleUrls: ['./main-survey.component.css']
})
export class MainSurveyComponent implements OnInit {
  @Input() survey: Survay;

  constructor() { }

  ngOnInit() {
  }

  addNewComment(searchElement) {
    let commentary: Commentary = new Commentary();

    this.survey.Commentaryies.unshift(commentary);

    setTimeout(function () {
      searchElement.querySelector("input").focus();
    }, 0.1
    );
  }
}
