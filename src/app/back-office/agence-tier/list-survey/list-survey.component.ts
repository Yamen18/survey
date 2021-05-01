import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { SurveyObj } from 'src/app/Models/template/SurveyObj';
import { InvokeEventService } from 'src/app/Services/invokeEvent.Service';
import { SharedService } from 'src/app/Services/shared.service';

@Component({
  selector: 'app-list-survey',
  templateUrl: './list-survey.component.html',
  styleUrls: ['./list-survey.component.css']
})
export class ListSurveyComponent implements OnInit {
  displayedColumns: string[] = ['name', 'action'];
  dataSource = new MatTableDataSource<SurveyObj>(this.shared.sharedSurveys);
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  constructor(private shared: SharedService, private invokeEvent: InvokeEventService) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  deleteSurvey(indexTemplate) {
    this.shared.sharedSurveys.splice(indexTemplate, 1);
    this.dataSource = new MatTableDataSource<SurveyObj>(this.shared.sharedSurveys);
    localStorage.setItem('survey', JSON.stringify(this.shared.sharedSurveys));
  }

  IsFrom(value) {
    setTimeout(() => {
      this.invokeEvent.isFromMultiSession.next(value);
    }, 10)
  }
}
