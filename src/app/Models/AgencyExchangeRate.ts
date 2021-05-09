export class AgencyExchangeRate {

  agency_exchange_rate_id: number;
  currency_name: string;
  exchange_rate: number;
  agency_id: number;


  constructor() {
    this.agency_exchange_rate_id = Math.floor(Math.random() * 100);
    this.currency_name = '';
  }

}
