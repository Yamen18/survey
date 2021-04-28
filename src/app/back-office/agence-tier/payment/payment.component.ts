import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  mode: string = 'card';

  constructor() { }

  ngOnInit() {
  }

  changeModePayment(idStep: number, element, paymentMode: string) {
    this.mode = paymentMode;
    for (var i = 0; i < element.getElementsByTagName('a').length; i++) {
      let stepElement = element.getElementsByTagName('a')[i];
      if (i == idStep) {
        stepElement.classList.add("active");
      } else {
        stepElement.classList.remove("active");
      }
    }
  }

}
