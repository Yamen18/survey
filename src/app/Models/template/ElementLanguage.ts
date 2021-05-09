export class ElementLanguage {

  element_language_id: number;
  language: string;

  name: string;
  description: string;

  element_id: number;

  constructor() {
    this.element_language_id = Math.floor(Math.random() * 100);
    this.name = '';
    this.language = '';
    this.description = '';
  }
}
