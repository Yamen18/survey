import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { Company } from 'src/app/Models/companies/Company';
import { SharedService } from 'src/app/Services/shared.service';

@Component({
  selector: 'app-list-companies',
  templateUrl: './list-companies.component.html',
  styleUrls: ['./list-companies.component.css']
})
export class ListCompaniesComponent implements OnInit {
  displayedColumns: string[] = ['name', 'action'];
  dataSource = new MatTableDataSource<Company>(this.shared.sharedCompanies);
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  constructor(private shared:SharedService) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  deleteCompany(indexTemplate){
    this.shared.sharedCompanies.splice(indexTemplate,1);
    this.dataSource = new MatTableDataSource<Company>(this.shared.sharedCompanies);
    localStorage.setItem('company', JSON.stringify(this.shared.sharedCompanies));

  }

}
