import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { MatPaginator } from '@angular/material/paginator';
import { Agency } from 'src/app/Models/Agency';
import { SharedService } from 'src/app/Services/shared.service';
import { SharedApiService } from 'src/app/Services/sharedApi.service';

@Component({
  selector: 'app-list-agence',
  templateUrl: './list-agence.component.html',
  styleUrls: ['./list-agence.component.css']
})
export class ListAgenceComponent implements OnInit {
  agencies: Agency[] = [];
  displayedColumns: string[] = ['name', 'action'];
  dataSource = new MatTableDataSource<Agency>(this.agencies);
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  constructor(private shared: SharedService, private wsAgency: SharedApiService) { }

  ngOnInit() {
    this.wsAgency.getAllAgencies().subscribe(agencies => {
      this.agencies = agencies;
      this.shared.sharedAgencies = agencies;
    });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  deleteAgency(indexTemplate) {
    this.wsAgency.deleteAgency(indexTemplate).subscribe(
      data => {
        if (data) {
          this.agencies.splice(indexTemplate, 1);
          this.shared.sharedAgencies = this.agencies;
        }
      }
    );
  }
}