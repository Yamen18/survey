import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-qr-code-generateur-dialog',
  templateUrl: './qr-code-generateur-dialog.component.html',
  styleUrls: ['./qr-code-generateur-dialog.component.css']
})
export class QrCodeGenerateurDialogComponent implements OnInit {
  elementType = 'url';
  value = 'http://localhost:4200/';
  constructor(public dialogRef: MatDialogRef<QrCodeGenerateurDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: string,
    private router: Router ) {}

  ngOnInit() {}

  closePopUp() {
    this.dialogRef.close();
  }

  navigateTo(){
    if(this.data =='coach'){
      this.router.navigate(['']);
    }else{
      this.router.navigate(['front/login']);
    }    
  }
}
