import { Component, OnInit } from '@angular/core';
import { Language } from 'src/app/Models/template/language';
import { Element } from 'src/app/Models/template/Element';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Template } from 'src/app/Models/template/Tempate';
import { SharedService } from 'src/app/Services/shared.service';

@Component({
  selector: 'app-new-specific-template',
  templateUrl: './new-specific-template.component.html',
  styleUrls: ['./new-specific-template.component.css']
})
export class NewSpecificTemplateComponent implements OnInit {
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
          let template = this.shared.sharedtemplate.find(tem => tem.Id == selectedId);
          if (template) {
            this.template =
              JSON.parse(JSON.stringify(
                this.shared.sharedtemplate.find(tem => tem.Id == selectedId)
              ))
              ;
          } else {
            this.template =
              JSON.parse(JSON.stringify(
                this.shared.specificTemplate.find(tem => tem.Id == selectedId)
              ));
          }
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

    if (temp) {
      this.template.IsShared = false;
      this.template.Id = Math.floor(Math.random() * 100);
      this.shared.specificTemplate.push(this.template);
    } else {
      temp = this.shared.specificTemplate.find(tem => tem.Id == this.template.Id);
      if (temp) {
        let index = this.shared.specificTemplate.findIndex(temp => temp.Id == temp.Id);
        this.shared.specificTemplate[index] = this.template;
      } else {
        this.template.IsShared = false;
        this.shared.specificTemplate.push(this.template);
      }
    }
    this._location.back();
    localStorage.setItem('templates-specific', JSON.stringify(this.shared.specificTemplate));
  }
}
