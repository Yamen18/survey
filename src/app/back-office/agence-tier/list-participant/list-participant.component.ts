import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { Participant } from 'src/app/Models/companies/Participant';
import { SharedService } from 'src/app/Services/shared.service';
import { Location } from '@angular/common';
import { Company } from 'src/app/Models/companies/Company';

@Component({
  selector: 'app-list-participant',
  templateUrl: './list-participant.component.html',
  styleUrls: ['./list-participant.component.css']
})
export class ListParticipantComponent implements OnInit {
  company: Company = new Company();
  participants: Participant[] = [];
  displayedColumns: string[] = ['FirstName', 'Email', 'GroupId' ,'action'];
  dataSource = new MatTableDataSource<Participant>(this.shared.selectedParticipants);
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  constructor(private _location: Location, private shared: SharedService) {
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  deleteParticipant(indexTemplate) {
    this.shared.selectedParticipants.splice(indexTemplate, 1);
    this.dataSource = new MatTableDataSource<Participant>(this.shared.selectedParticipants);
  }

  backToCompanyFormulaire() {
    this._location.back();
  }
}
