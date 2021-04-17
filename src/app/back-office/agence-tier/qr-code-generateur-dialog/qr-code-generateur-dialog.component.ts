import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-qr-code-generateur-dialog',
  templateUrl: './qr-code-generateur-dialog.component.html',
  styleUrls: ['./qr-code-generateur-dialog.component.css']
})
export class QrCodeGenerateurDialogComponent implements OnInit {
  elementType = 'url';
  value = 'http://localhost:4200/';
  constructor() { }

  ngOnInit() {
  }

}
