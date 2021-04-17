import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable()
export class InvokeEventService {

  invokeChangeRatedNumber: Subject<any> = new Subject();

}
