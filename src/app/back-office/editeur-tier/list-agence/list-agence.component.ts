import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { MatPaginator } from '@angular/material/paginator';
import { Agency } from 'src/app/Models/Agency';
import { SharedService } from 'src/app/Services/shared.service';

@Component({
  selector: 'app-list-agence',
  templateUrl: './list-agence.component.html',
  styleUrls: ['./list-agence.component.css']
})
export class ListAgenceComponent implements OnInit {
  displayedColumns: string[] = ['name', 'action'];
  dataSource = new MatTableDataSource<Agency>(this.shared.sharedAgencies);
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  constructor(private shared:SharedService) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  deleteAgency(indexTemplate){
    this.shared.sharedAgencies.splice(indexTemplate,1);
    this.dataSource = new MatTableDataSource<Agency>(this.shared.sharedAgencies);
    localStorage.setItem('agences', JSON.stringify(this.shared.sharedAgencies));

  }
}