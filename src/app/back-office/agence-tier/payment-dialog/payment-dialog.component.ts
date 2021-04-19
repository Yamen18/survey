import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { InvokeEventService } from 'src/app/Services/invokeEvent.Service';
import { QrCodeGenerateurDialogComponent } from '../qr-code-generateur-dialog/qr-code-generateur-dialog.component';

@Component({
  selector: 'app-payment-dialog',
  templateUrl: './payment-dialog.component.html',
  styleUrls: ['./payment-dialog.component.css']
})
export class PaymentDialogComponent implements OnInit {
  mode: string = 'card';
  constructor(public dialogRef: MatDialogRef<PaymentDialogComponent>, public dialog: MatDialog,private invokeEvent:InvokeEventService) { }

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

  closePaymentDialog() {
    this.invokeEvent.approuvePayment.next("isApprouved");
    this.dialogRef.close();
    this.dialog.open(QrCodeGenerateurDialogComponent, {
      disableClose: false
    });
  }
}
