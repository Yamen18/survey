import { ElementLanguage } from "./ElementLanguage";

export class Element {
  element_id: number;
  template_id: number;

  elementLanguages:ElementLanguage[]=[]
    constructor() {
      this.element_id = Math.floor(Math.random() * 100);
    }
  }
  