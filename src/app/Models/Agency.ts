import { AgencyExchangeRate } from "./AgencyExchangeRate";

export class Agency {
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
  password: string = '';
  coins_bonus: number;
  coins: number;
  template_price: number;
  agencyExchangeRates: AgencyExchangeRate[] = [];

  constructor() {
    this.agency_id = Math.floor(Math.random() * 100);
  }
}
