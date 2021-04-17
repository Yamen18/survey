export class Language {
    Id: number;
    Name: string;
    Title : string;
    Description: string;
    constructor() {
      this.Id = Math.floor(Math.random() * 100);
      this.Name = '';
      this.Title = '';
      this.Description = '';
    }
  }
  