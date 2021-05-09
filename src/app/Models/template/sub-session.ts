import { Group } from "../companies/Group";
import { Participant } from "../companies/Participant";
import { SubSessionCoach } from "./SubSessionCoach";

export class SubSession {

    sub_session_id: number;

    name: string='';
    description: string;

    template_id: number;
    session_id: number;

    Subsession_coach : SubSessionCoach;

    //change to list of coaches 'object'
    Coach_Ids: number[]=[];


    nbreParticipant: number;
    groups: Group[] = [];
    participants: Participant[] = [];
    status: string = '';

    //IsPayed: Boolean = false;

    constructor() {
        this.sub_session_id = Math.floor(Math.random() * 100);
    }
}