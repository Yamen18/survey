import { Currency } from "./Currency";

export class VMoney {

    Id: number;
    Name:string;
    Currency:Currency[]=[]; 
    constructor() {
      this.Id = Math.floor(Math.random() * 100);
      this.Name = '';
    }
  }
  