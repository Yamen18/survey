export class Participant {

    participant_id: number;
    firstName: string = '';
    lastName: string = '';
    email: string = '';

    phone: number;
    mobile: number;
    
    address: string = '';
    zip_code: string = '';
    city: string = '';
    country: string = '';

    group_id: number;
    session_id: number;
    
    constructor() {
        this.participant_id = Math.floor(Math.random() * 100);
    }
}