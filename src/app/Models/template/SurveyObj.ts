export class SurveyObj {

    Id: number;
    Name: string;
    Description: string;
    Company_Id: number;
    Template_Id: number;
    Coach_Id: number;
    NbreParticipant: number;
    IsPayed: Boolean = false;
    constructor() {
        this.Id = Math.floor(Math.random() * 100);
    }
}