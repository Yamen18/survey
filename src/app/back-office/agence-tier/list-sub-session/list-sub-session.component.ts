import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatPaginator, MatTableDataSource } from '@angular/material';
import { SubSession } from 'src/app/Models/template/sub-session';
import { SharedService } from 'src/app/Services/shared.service';
import { Location } from '@angular/common';
import { QrCodeGenerateurDialogComponent } from '../qr-code-generateur-dialog/qr-code-generateur-dialog.component';

@Component({
  selector: 'app-list-sub-session',
  templateUrl: './list-sub-session.component.html',
  styleUrls: ['./list-sub-session.component.css']
})
export class ListSubSessionComponent implements OnInit {
  @Input() isFrom:string;
  displayedColumns: string[] = ['name', 'action'];
  dataSource = new MatTableDataSource<SubSession>(this.shared.selectedSession.Sub_session);
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(private shared: SharedService,private _location: Location,public dialog: MatDialog) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  deleteSubSession(indexTemplate){
    this.shared.selectedSession.Sub_session.splice(indexTemplate,1);
    this.dataSource = new MatTableDataSource<SubSession>(this.shared.selectedSession.Sub_session);
  }

  back(){
    this._location.back();
  }

  openQrCodeDialog() {
    this.dialog.open(QrCodeGenerateurDialogComponent, {
      disableClose: false,
      data:this.isFrom
    });
  }

}
