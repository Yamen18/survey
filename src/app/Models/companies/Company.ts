import { Group } from "./Group";
import { Participant } from "./Participant";

export class Company {

  Id: number;
  Name: string = '';
  Email: string = '';
  Phone: number;
  Mobile: number;
  Adress: string = '';
  Zip: string = '';
  City: string = '';
  Country: string = '';
  TaxIdentification: string = '';
  TradeRegister: string = '';

  
  constructor() {
    this.Id = Math.floor(Math.random() * 100);
  }
}
