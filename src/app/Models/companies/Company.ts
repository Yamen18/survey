export class Company {

  company_id: number;
  agency_id: number;

  name: string = '';
  email: string = '';
  phone: number;
  mobile: number;
  address: string = '';
  zip_code: string = '';
  city: string = '';
  country: string = '';
  tax_identification: string = '';
  trade_licence: string = '';

  
  constructor() {
    this.company_id = Math.floor(Math.random() * 100);
  }
}
