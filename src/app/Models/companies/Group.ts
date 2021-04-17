export class Group {
    Id: number;
    Title: string = '';
    Description: string = '';

    constructor() {
        this.Id = Math.floor(Math.random() * 100);
      }
}