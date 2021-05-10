import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { MatPaginator } from '@angular/material/paginator';
import { Template } from 'src/app/Models/template/Tempate';
import { SharedService } from 'src/app/Services/shared.service';
import { SharedApiService } from 'src/app/Services/sharedApi.service';

@Component({
  selector: 'app-list-template',
  templateUrl: './list-template.component.html',
  styleUrls: ['./list-template.component.css']
})
export class ListTemplateComponent implements OnInit {
  templates: Template[] = [];
  displayedColumns: string[] = ['name', 'action'];
  dataSource = new MatTableDataSource<Template>(this.templates);
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(private shared: SharedService, private wsTemplate: SharedApiService) { }

  ngOnInit() {
    this.wsTemplate.getAllTemplate().subscribe(listTemplates => {
      this.templates = listTemplates;
      this.shared.sharedtemplate = listTemplates;
    })
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  deleteTemplate(indexTemplate) {
    this.wsTemplate.deleteTemplate(indexTemplate).subscribe(
      data => {
        if (data) {
          this.templates.splice(indexTemplate, 1);
          this.shared.sharedtemplate = this.templates;
        }
      }
    );
  }
}