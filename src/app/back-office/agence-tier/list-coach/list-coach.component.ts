import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { Coach } from 'src/app/Models/companies/Coach';
import { SharedService } from 'src/app/Services/shared.service';
import { SharedApiService } from 'src/app/Services/sharedApi.service';

@Component({
  selector: 'app-list-coach',
  templateUrl: './list-coach.component.html',
  styleUrls: ['./list-coach.component.css']
})
export class ListCoachComponent implements OnInit {

  coaches: Coach[] = [];
  displayedColumns: string[] = ['name', 'action'];
  dataSource = new MatTableDataSource<Coach>(this.coaches);
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  constructor(private shared: SharedService, private wsCoach: SharedApiService) { }

  ngOnInit() {
    this.wsCoach.getAllCoach().subscribe(listOfCoaches => {
      this.coaches = listOfCoaches;
      this.shared.sharedCoachs = listOfCoaches;
    })
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  deleteCoach(indexTemplate) {
    this.wsCoach.deleteCoach(indexTemplate).subscribe(
      data => {
        if (data) {
          this.coaches.splice(indexTemplate, 1);
          this.shared.sharedCoachs = this.coaches;
        }
      }
    );
    // this.shared.sharedCoachs.splice(indexTemplate, 1);
    // this.dataSource = new MatTableDataSource<Coach>(this.shared.sharedCoachs);
    // localStorage.setItem('coach', JSON.stringify(this.shared.sharedCoachs));
  }
}
