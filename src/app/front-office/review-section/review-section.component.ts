import { Component, OnInit, Output,Input, EventEmitter } from '@angular/core';
import { Commentary } from '../../Models/Commentary';
import { Agreement } from '../../Models/Agreement';

@Component({
  selector: 'app-review-section',
  templateUrl: './review-section.component.html',
  styleUrls: ['./review-section.component.css']
})
export class ReviewSectionComponent implements OnInit {
  @Input() moyenne:number;
  @Output() selectedComments = new EventEmitter();
  spanColor: string = '';
  sectionColor: string = '';
  listOfComme: Commentary[] = [];
  agreementsList: Agreement[] = [];
  
  constructor() {
    let commentary1: Commentary = new Commentary();
    commentary1.Id = 10;
    commentary1.Commentary = 'test 11'
    let commentary2: Commentary = new Commentary();
    commentary2.Id = 11;
    commentary2.Commentary = 'test 12'
    this.listOfComme.push(commentary1, commentary2);

    let agree: Agreement = new Agreement();
    agree.Id = 66;
    agree.Name = 'daily meeting standUp';
    this.agreementsList.push(agree);
  }

  ngOnInit() {
    this.setColor(this.moyenne);
  }

  setColor(moy: number) {
    if (moy > 0 && moy <= 1) {
      this.spanColor = '#872181'
      this.sectionColor = 'rgb(135 33 129 / 76%)'
      return this.spanColor;
    }
    else if (moy > 1 && moy <= 2) {
      this.spanColor = '#960032'
      this.sectionColor = 'rgb(150 0 50 / 75%)'
      return this.spanColor;
    }
    else if (moy > 2 && moy <= 3) {
      this.spanColor = '#ff5050'
      this.sectionColor = 'rgb(255 80 80 / 75%)'
      return this.spanColor;
    }
    else if (moy > 3 && moy <= 4) {
      this.spanColor = '#50ccaa'
      this.sectionColor = 'rgb(80 204 170 / 75%)'
      return this.spanColor;
    }
    else if (moy > 4 && moy <= 5) {
      this.spanColor = '#50f0e6'
      this.sectionColor = 'rgb(80 240 230 / 65%)'
      return this.spanColor;
    }
  }

  displayRightSide(sectionName) {
    let sendedObj = {
      type: 'empty',
      list: []
    }
    let div = document.getElementById("rightSideSynthese");
    if (div.style.width != '0%') {
      div.style.width = '0%';
      div.style.padding = '0rem;'
      this.sendObjEventEmt(sendedObj);
    } else {
      div.style.width = '33%';
      div.style.padding = '1rem;'
      if (sectionName == 'comments') {
        sendedObj.type = sectionName;
        sendedObj.list = this.listOfComme;
        this.sendObjEventEmt(sendedObj);
      } else {
        sendedObj.type = sectionName;
        sendedObj.list = this.agreementsList;
        this.sendObjEventEmt(sendedObj);
      }
    }
  }

  sendObjEventEmt(sendedObj) {
    this.selectedComments.emit(sendedObj);
  }
}
