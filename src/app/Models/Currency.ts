export class Currency {

    Id: number;
    Name:string;
    ExchangeRate:number;

    constructor() {
      this.Id = Math.floor(Math.random() * 100);
      this.Name = '';
    }
    
  }
  