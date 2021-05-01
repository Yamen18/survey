import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  amount: number = 0;
  constructor() { }

  ngOnInit() {
  }

  changeCurrency(value) {
    if (value=='euro') {
      this.amount = 150 * 2.2;
    } else {
      this.amount = 150 * 5.2;
    }
  }
}
