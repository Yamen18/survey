export class Coach {
  Id: number;
  Name: string = '';
  Email: string = '';
  Phone: number;
  Mobile: number;
  Adress: string = '';
  Zip: string = '';
  City: string = '';
  Country: string = '';
  Password: string = '';
  constructor() {
    this.Id = Math.floor(Math.random() * 100);
  }
}