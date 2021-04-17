import { Component, OnInit, Input } from '@angular/core';
import { Survay } from '../../Models/Survay';
import { InvokeEventService } from '../../Services/invokeEvent.Service';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {
  @Input() survey: Survay;
  constructor(private invokeEventService: InvokeEventService) { }

  ngOnInit() {
  }

  public addRating(idStep: number, element) {
    let isTheSame: boolean = false;
    if (this.survey.Rating == idStep) {
      isTheSame = true;
    }
    for (var i = 0; i < element.getElementsByTagName('button').length; i++) {
      let stepElement = element.getElementsByTagName('button')[i];
      if (isTheSame) {
        this.survey.Rating = 0;
        stepElement.classList.add("command--unselected");
        stepElement.classList.remove("command--selected");
        stepElement.classList.remove("command--disabled");
      } else {
        if (i == (idStep - 1)) {
          this.survey.Rating = idStep;
          stepElement.classList.remove("command--unselected");
          stepElement.classList.remove("command--disabled");
          stepElement.classList.add("command--selected");
        } else {
          stepElement.classList.remove("command--selected");
          stepElement.classList.add("command--unselected");
          stepElement.classList.add("command--disabled");
        }
      }
    }
    this.invokeEventService.invokeChangeRatedNumber.next('changed');
  }
}
