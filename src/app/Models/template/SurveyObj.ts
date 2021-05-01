import { Group } from "../companies/Group";
import { Participant } from "../companies/Participant";
import { SubSession } from "./sub-session";

export class SurveyObj {

    Id: number;
    Name: string;
    Description: string;
    Company_Id: number;
    Template_Id: number;
    Coach_Ids: number[]=[];
    NbreParticipant: number;
    IsMultiSession: boolean;
    Groups: Group[] = [];
    Participants: Participant[] = [];
    Sub_session: SubSession[] = [];

    constructor() {
        this.Id = Math.floor(Math.random() * 100);
    }
}