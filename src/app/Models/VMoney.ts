import { AgencyExchangeRate } from "./AgencyExchangeRate";

export class VMoney {

    Id: number;
    Name:string;
    Currency:AgencyExchangeRate[]=[]; 
    constructor() {
      this.Id = Math.floor(Math.random() * 100);
      this.Name = '';
    }
  }
  