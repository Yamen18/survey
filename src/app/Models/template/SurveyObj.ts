import { SubSession } from "./sub-session";

export class SurveyObj {

    Id: number;
    Name: string;
    Description: string;
    Company_Id: number;
    Template_Id: number;
    Coach_Id: number;
    NbreParticipant: number;
    IsMultiSession: boolean = false;
    Sub_session: SubSession[] = [];

    constructor() {
        this.Id = Math.floor(Math.random() * 100);
    }
}