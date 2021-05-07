import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatPaginator, MatTableDataSource } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { SurveyObj } from 'src/app/Models/template/SurveyObj';
import { InvokeEventService } from 'src/app/Services/invokeEvent.Service';
import { SharedService } from 'src/app/Services/shared.service';
import { QrCodeGenerateurDialogComponent } from '../qr-code-generateur-dialog/qr-code-generateur-dialog.component';

@Component({
  selector: 'app-list-survey',
  templateUrl: './list-survey.component.html',
  styleUrls: ['./list-survey.component.css']
})
export class ListSurveyComponent implements OnInit {
  displayedColumns: string[] = ['name', 'action'];
  dataSource = new MatTableDataSource<SurveyObj>(this.shared.sharedSurveys);
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  isFrom: string = '';
  constructor(private shared: SharedService, 
      private invokeEvent: InvokeEventService,
      private activatedRoute: ActivatedRoute,
      public dialog: MatDialog) { }

  ngOnInit() {
    this.activatedRoute.parent.url.subscribe((urlPath) => {
      this.isFrom = urlPath[urlPath.length - 1].path;
    })
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

  openQrCodeDialog() {
    this.dialog.open(QrCodeGenerateurDialogComponent, {
      disableClose: false,
      data:this.isFrom
    });
  }
}
