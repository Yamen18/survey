export class Coach {
  coach_id: number;
  agency_id: number;
  name: string = '';
  email: string = '';
  phone: number;
  mobile: number;
  address: string = '';
  zip_code: string = '';
  city: string = '';
  country: string = '';
  password: string = '';
  constructor() {
    this.coach_id = Math.floor(Math.random() * 100);
  }
}