import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import {MatPaginator} from '@angular/material/paginator';
import { Template } from 'src/app/Models/template/Tempate';
import { SharedService } from 'src/app/Services/shared.service';

@Component({
  selector: 'app-list-template',
  templateUrl: './list-template.component.html',
  styleUrls: ['./list-template.component.css']
})
export class ListTemplateComponent implements OnInit {
  displayedColumns: string[] = ['name', 'action'];
  dataSource = new MatTableDataSource<Template>(this.shared.sharedtemplate);
  @ViewChild(MatPaginator,{static:true}) paginator: MatPaginator;
  
  constructor(private shared:SharedService) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  deleteTemplate(indexTemplate){
    this.shared.sharedtemplate.splice(indexTemplate,1);
    this.dataSource = new MatTableDataSource<Template>(this.shared.sharedtemplate);
    localStorage.setItem('templates', JSON.stringify(this.shared.sharedtemplate));
  }
}