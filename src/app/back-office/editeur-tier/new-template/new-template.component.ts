import { Component, OnInit } from '@angular/core';
import { Language } from 'src/app/Models/template/language';
import { Element } from 'src/app/Models/template/Element';
import { ActivatedRoute, RouterStateSnapshot } from '@angular/router';
import { Location } from '@angular/common';
import { Template } from 'src/app/Models/template/Tempate';
import { SharedService } from 'src/app/Services/shared.service';

@Component({
  selector: 'app-new-template',
  templateUrl: './new-template.component.html',
  styleUrls: ['./new-template.component.css']
})
export class NewTemplateComponent implements OnInit {
  template: Template;
  constructor(private _location: Location, private route: ActivatedRoute, private shared: SharedService) {
    this.template = new Template();
    this.template.Elements = [];
    this.initializationTemplate();
  }

  ngOnInit() {
    this.route.paramMap.subscribe(
      params => {
        let selectedId = Number(params.get('id'));
        if (selectedId) {
          this.template = this.shared.sharedtemplate.find(tem => tem.Id == selectedId);
        }
      }
    );
  }

  initializationTemplate() {
    let template = new Element();
    let lang = new Language();
    template.Languages.push(lang);
    this.template.Elements.push(template);
  }

  addNewLang(templateIndex: number) {
    let lang = new Language();
    this.template.Elements[templateIndex].Languages.push(lang);
  }

  deleteLang(templateIndex: number, indexLang: number) {
    this.template.Elements[templateIndex].Languages.splice(indexLang, 1);
  }

  addNewElement() {
    this.initializationTemplate();
  }

  deleteTemplate(indexTemplate: number) {
    this.template.Elements.splice(indexTemplate, 1);
  }

  addNewTemplate() {
    let temp = this.shared.sharedtemplate.find(tem => tem.Id == this.template.Id);
    this.template.IsShared = true;
    if (temp) {
      let index = this.shared.sharedtemplate.findIndex(temp => temp.Id == temp.Id);
      this.shared.sharedtemplate[index] = this.template;
    } else {
      this.shared.sharedtemplate.push(this.template);
    }
    this._location.back();
    localStorage.setItem('templates', JSON.stringify(this.shared.sharedtemplate));
  }
}
