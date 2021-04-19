import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { MatPaginator } from '@angular/material/paginator';
import { Template } from 'src/app/Models/template/Tempate';
import { SharedService } from 'src/app/Services/shared.service';

@Component({
  selector: 'app-list-agence-template',
  templateUrl: './list-agence-template.component.html',
  styleUrls: ['./list-agence-template.component.css']
})
export class ListAgenceTemplateComponent implements OnInit {
  displayedColumns: string[] = ['name', 'action'];

  sharedTemplate = new MatTableDataSource<Template>(this.shared.sharedtemplate);
  specificTemplate = new MatTableDataSource<Template>(this.shared.specificTemplate);

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  constructor(private shared: SharedService) { }

  ngOnInit() {
  }

  deleteTemplate(index:number) {
    this.shared.specificTemplate.splice(index,1);
    this.specificTemplate = new MatTableDataSource<Template>(this.shared.specificTemplate);

  }

}
