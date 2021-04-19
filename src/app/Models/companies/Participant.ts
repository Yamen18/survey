export class Participant {
    Id: number;
    FirstName: string = '';
    LastName: string = '';
    Email: string = '';
    Phone: number;
    Mobile: number;
    Adress: string = '';
    Zip: string = '';
    City: string = '';
    GroupId: number;
    constructor() {
        this.Id = Math.floor(Math.random() * 100);
    }
}