import { Component, OnInit, Input } from '@angular/core';
import { Survay } from '../../Models/Survay';
import { Commentary } from '../../Models/Commentary';
import { InvokeEventService } from 'src/app/Services/invokeEvent.Service';

@Component({
  selector: 'app-main-survey',
  templateUrl: './main-survey.component.html',
  styleUrls: ['./main-survey.component.css']
})
export class MainSurveyComponent implements OnInit {
  @Input() survey: Survay;
  @Input() userConnected: string;
  constructor(private invokeEventService:InvokeEventService) { }

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
