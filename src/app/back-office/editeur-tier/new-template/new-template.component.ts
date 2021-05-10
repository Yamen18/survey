import { Component, OnInit } from '@angular/core';
import { ElementLanguage } from 'src/app/Models/template/ElementLanguage';
import { Element } from 'src/app/Models/template/Element';
import { ActivatedRoute, RouterStateSnapshot } from '@angular/router';
import { Location } from '@angular/common';
import { Template } from 'src/app/Models/template/Tempate';
import { SharedService } from 'src/app/Services/shared.service';
import { SharedApiService } from 'src/app/Services/sharedApi.service';

@Component({
  selector: 'app-new-template',
  templateUrl: './new-template.component.html',
  styleUrls: ['./new-template.component.css']
})
export class NewTemplateComponent implements OnInit {
  template: Template;
  constructor(private _location: Location,
    private route: ActivatedRoute,
    private shared: SharedService,
    private wsTemplate: SharedApiService) {
    this.template = new Template();
    this.template.elements = [];
    this.initializationTemplate();
  }

  ngOnInit() {
    this.route.paramMap.subscribe(
      params => {
        let selectedId = Number(params.get('id'));
        if (selectedId) {
          this.template = this.shared.sharedtemplate.find(tem => tem.template_id == selectedId);
        }
      }
    );
  }

  initializationTemplate() {
    let template = new Element();
    let lang = new ElementLanguage();
    template.elementLanguages.push(lang);
    this.template.elements.push(template);
  }

  addNewLang(templateIndex: number) {
    let lang = new ElementLanguage();
    this.template.elements[templateIndex].elementLanguages.push(lang);
  }

  deleteLang(templateIndex: number, indexLang: number) {
    this.template.elements[templateIndex].elementLanguages.splice(indexLang, 1);
  }

  addNewElement() {
    this.initializationTemplate();
  }

  deleteTemplate(indexTemplate: number) {
    this.template.elements.splice(indexTemplate, 1);
  }

  addNewTemplate() {
    this.wsTemplate.saveTemplate(this.template).subscribe(data => {
      this._location.back();
    });
  }
}
