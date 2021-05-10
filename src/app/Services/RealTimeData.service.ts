import { Injectable } from '@angular/core';
import * as signalR from '@microsoft/signalr';// import signalR
import { HttpClient } from '@angular/common/http';
import { ReqDto } from '../Models/ReqDto';
import { InvokeEventService } from './invokeEvent.Service';
import { EnvService } from './env.service';

@Injectable({
  providedIn: 'root'
})


export class RealTimeDataService {

  apiUrl = this.env.apiUrl;
  private connection: any =
    new signalR.HubConnectionBuilder().withUrl(this.apiUrl + "genericSocket")   // mapping to the chathub as in startup.cs
      .configureLogging(signalR.LogLevel.Information)
      .build();
  readonly POST_URL =this.apiUrl + "api/SignalR/StartSession"

  constructor(private http: HttpClient, private invokeEvent: InvokeEventService,private env:EnvService) {
    this.connection.onclose(async () => {
      await this.start();
    });

    this.connection.on("SetStartSessionTrue", () => { this.setStartSessionTrue() })
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
    this.http.post(this.POST_URL, requestDto);
  }

  setStartSessionTrue() {
    localStorage.setItem("isStarted", "true");
    this.invokeEvent.startSession.next('isStarted');
  }

}