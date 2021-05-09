import { Group } from "../companies/Group";
import { Participant } from "../companies/Participant";
import { SessionCoach } from "./SessionCoach";
import { SubSession } from "./sub-session";

export class Session {

    session_id: number;
    company_id: number;
    template_id: number;


    name: string;
    description: string;

    session_coach : SessionCoach;
    //change many-to-many => add new object session_coach 'contains id_session/id_coach' and in session i have list of session_coach
    Coach_Ids: number[] = [];


    nbreParticipant: number;
    isMultiSession: boolean;
    status: string = '';
    
    groups: Group[] = [];
    participants: Participant[] = [];
    subSessions: SubSession[] = [];

    constructor() {
        this.session_id = Math.floor(Math.random() * 100);
    }
}