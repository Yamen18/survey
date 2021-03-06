import { Injectable } from '@angular/core';
import * as signalR from '@microsoft/signalr';// import signalR
import { HttpClient } from '@angular/common/http';
import { ReqDto } from '../Models/DTO/ReqDto';
import { InvokeEventService } from './invokeEvent.Service';
import { EnvService } from './env.service';
import { ParticipantFormInformationDto } from '../Models/DTO/participantFormInformationDto';

@Injectable({
  providedIn: 'root'
})


export class RealTimeDataService {

  apiUrl = this.env.apiUrl;
  private connection: any =
    new signalR.HubConnectionBuilder().withUrl(this.apiUrl + "genericSocket")   // mapping to the chathub as in startup.cs
      .configureLogging(signalR.LogLevel.Information)
      .build();

  readonly POST_URL_StartSession = this.apiUrl + "api/SignalR/StartSession";
  readonly POST_URL_SubmitForm = this.apiUrl + "api/SignalR/SubmitFrom";
  readonly POST_URL_StateFormParticipant = this.apiUrl + "api/SignalR/StateForm";

  constructor(private http: HttpClient, private invokeEvent: InvokeEventService, private env: EnvService) {
    this.connection.onclose(async () => {
      await this.start();
    });

    this.connection.on("SetStartSessionTrue", () => { this.setStartSessionTrue() });

    this.connection.on("SetSubmitFromTrue", () => { this.setSubmitFormTrue() });

    this.connection.on("SetStateFormParticipant", () => { this.setStateFormParticipant() });
    this.start();
  }


  // Strart the connection
  public async start() {
    try {
      await this.connection.start();
      console.log("connected");
    } catch (err) {
      console.log(err);
      setTimeout(() => this.start(), 5000);
    }
  }

  /* ****************************** Public Mehods **************************************** */
  public startSession(requestDto: ReqDto) {
    this.http.post(this.POST_URL_StartSession, requestDto).subscribe(data => {
      console.log(data);
    })
  }

  setStartSessionTrue() {
    localStorage.setItem("isStarted", "true");
    this.invokeEvent.startSession.next("isStarted");
  }

  public validateForms(requestDto: ReqDto) {
    this.http.post(this.POST_URL_SubmitForm, requestDto).subscribe(data => {
      console.log(data);
    });
  }

  setSubmitFormTrue() {
    localStorage.setItem("formIsCompleted", "true");
    this.invokeEvent.submitForm.next("validateResponse")
  }

  sendFormStateParticipant(participantFormInformationDto: ParticipantFormInformationDto) {
    this.http.post(this.POST_URL_StateFormParticipant, participantFormInformationDto).subscribe(data => {
      console.log(data);
    });
  }

  setStateFormParticipant() {
    localStorage.setItem("formIsCompleted", "true");
    this.invokeEvent.submitForm.next("validateResponse")
  }
}