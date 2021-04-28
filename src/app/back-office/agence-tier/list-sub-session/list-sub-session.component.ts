import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { SubSession } from 'src/app/Models/template/sub-session';
import { SharedService } from 'src/app/Services/shared.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-list-sub-session',
  templateUrl: './list-sub-session.component.html',
  styleUrls: ['./list-sub-session.component.css']
})
export class ListSubSessionComponent implements OnInit {
  displayedColumns: string[] = ['name', 'action'];
  dataSource = new MatTableDataSource<SubSession>(this.shared.selectedSession.Sub_session);
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(private shared: SharedService,private _location: Location) { }

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

}
