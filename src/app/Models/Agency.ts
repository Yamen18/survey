import { Currency } from "./Currency";

export class Agency {
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
  Password: string = '';
  SphereCoinsBonus: number;
  Currency: Currency[] = [];

  constructor() {
    this.Id = Math.floor(Math.random() * 100);
  }
}
