import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { Coach } from 'src/app/Models/companies/Coach';
import { SharedService } from 'src/app/Services/shared.service';

@Component({
  selector: 'app-list-coach',
  templateUrl: './list-coach.component.html',
  styleUrls: ['./list-coach.component.css']
})
export class ListCoachComponent implements OnInit {

  displayedColumns: string[] = ['name', 'action'];
  dataSource = new MatTableDataSource<Coach>(this.shared.sharedCoachs);
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  constructor(private shared:SharedService) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  deleteCoach(indexTemplate){
    this.shared.sharedCoachs.splice(indexTemplate,1);
    this.dataSource = new MatTableDataSource<Coach>(this.shared.sharedCoachs);
    localStorage.setItem('coach', JSON.stringify(this.shared.sharedCoachs));

  }
}
