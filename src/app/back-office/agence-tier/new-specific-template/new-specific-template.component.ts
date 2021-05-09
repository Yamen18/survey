import { Component, OnInit } from '@angular/core';
import { ElementLanguage } from 'src/app/Models/template/ElementLanguage';
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
    this.template.elements = [];
    this.initializationTemplate();
  }

  ngOnInit() {
    this.route.paramMap.subscribe(
      params => {
        let selectedId = Number(params.get('id'));
        if (selectedId) {
          let template = this.shared.sharedtemplate.find(tem => tem.template_id == selectedId);
          if (template) {
            this.template =
              JSON.parse(JSON.stringify(
                this.shared.sharedtemplate.find(tem => tem.template_id == selectedId)
              ))
              ;
          } else {
            this.template =
              JSON.parse(JSON.stringify(
                this.shared.specificTemplate.find(tem => tem.template_id == selectedId)
              ));
          }
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
    let temp = this.shared.sharedtemplate.find(tem => tem.template_id == this.template.template_id);

    if (temp) {
      this.template.isGeneric = false;
      this.template.template_id = Math.floor(Math.random() * 100);
      this.shared.specificTemplate.push(this.template);
    } else {
      temp = this.shared.specificTemplate.find(tem => tem.template_id == this.template.template_id);
      if (temp) {
        let index = this.shared.specificTemplate.findIndex(temp => temp.template_id == temp.template_id);
        this.shared.specificTemplate[index] = this.template;
      } else {
        this.template.isGeneric = false;
        this.shared.specificTemplate.push(this.template);
      }
    }
    this._location.back();
    localStorage.setItem('templates-specific', JSON.stringify(this.shared.specificTemplate));
  }
}
