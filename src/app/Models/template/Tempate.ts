import { Element } from "./Element";
export class Template {

  template_id: number;
  name: string;
  description: string;
  
  elements: Element[];

  isGeneric: boolean;
  agency_id: number;
  constructor() {
    this.template_id = Math.floor(Math.random() * 100);
    this.name = '';
    this.description = '';
    this.elements = [];
  }
}
