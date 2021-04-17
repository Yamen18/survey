import { Element } from "./Element";
export class Template {
  Id: number;
  Name: string;
  Description:string;
  Elements: Element[];
  IsShared:boolean;
  constructor() {
    this.Id = Math.floor(Math.random() * 100);
    this.Name = '';
    this.Description = '';
    this.Elements = [];
  }
}
