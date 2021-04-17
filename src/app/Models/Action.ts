export class Action {
  Id: number;
  Name: string;
  AssignedTo: string;
  EffectiveDate: string;
  Status: string;
  constructor() {
    this.Id = 0;
    this.Name = '';
    this.AssignedTo = '';
    this.EffectiveDate = '';
  }
}
