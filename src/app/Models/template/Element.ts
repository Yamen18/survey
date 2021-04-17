import { Language } from "./language";

export class Element {
    Id: number;
    Languages:Language[]=[]
    constructor() {
      this.Id = Math.floor(Math.random() * 100);
    }
  }
  