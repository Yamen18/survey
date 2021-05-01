import { Group } from "../companies/Group";
import { Participant } from "../companies/Participant";

export class SubSession {

    Id: number;
    Name: string='';
    Template_Id: number;
    Coach_Ids: number[]=[];
    NbreParticipant: number;
    Groups: Group[] = [];
    Participants: Participant[] = [];
    //IsPayed: Boolean = false;

    constructor() {
        this.Id = Math.floor(Math.random() * 100);
    }
}