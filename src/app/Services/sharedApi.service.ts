import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Agency } from "../Models/Agency";
import { Coach } from "../Models/companies/Coach";
import { Template } from "../Models/template/Tempate";
import { EnvService } from "./env.service";

const httpOptions = {
    Headers: new HttpHeaders({
        'Content-Type': 'application/json'
    })
}

@Injectable({
    providedIn: 'root'
})


export class SharedApiService {

    constructor(private http: HttpClient, private env: EnvService) {
    }

    // debut  agence
    getAllAgencies(): Observable<Agency[]> {
        return this.http.get<Agency[]>(this.env.apiUrl + "url partie back").pipe();
    }

    saveAgency(agence: Agency): Observable<Agency> {
        return this.http.post<Agency>(this.env.apiUrl + "url partie back", agence)
    }

    deleteAgency(id: number) {
        return this.http.post(this.env.apiUrl + "remove?id" + id, httpOptions);
    }
    // fin  agence


    // debut  coach
    getAllCoach(): Observable<Coach[]> {
        return this.http.get<Coach[]>(this.env.apiUrl + "url partie back").pipe();
    }

    saveCoach(coach: Coach): Observable<Coach> {
        return this.http.post<Coach>(this.env.apiUrl + "url partie back", coach)
    }

    deleteCoach(id: number) {
        return this.http.post(this.env.apiUrl + "remove?id" + id, httpOptions);
    }
    // fin  coach 

    // debut  Template
    getAllTemplate(): Observable<Template[]> {
        return this.http.get<Template[]>(this.env.apiUrl + "url partie back").pipe();
    }

    saveTemplate(template: Template): Observable<Template> {
        return this.http.post<Template>(this.env.apiUrl + "url partie back", template)
    }

    deleteTemplate(id: number) {
        return this.http.post(this.env.apiUrl + "remove?id" + id, httpOptions);
    }
    // fin  Template 

}