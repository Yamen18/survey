import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable()
export class InvokeEventService {

  invokeChangeRatedNumber: Subject<any> = new Subject();
  invokeSendCompany:Subject<any> = new Subject();
  approuvePayment:Subject<any> = new Subject();
  isFromMultiSession:Subject<boolean> = new Subject();
  startSession:Subject<any> = new Subject(); 
  submitForm:Subject<any> = new Subject(); 
}
