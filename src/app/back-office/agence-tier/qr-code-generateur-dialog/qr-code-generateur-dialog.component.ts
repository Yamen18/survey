import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Router } from '@angular/router';
import { ReqDto } from 'src/app/Models/DTO/ReqDto';
import { RealTimeDataService } from 'src/app/Services/RealTimeData.service';

@Component({
  selector: 'app-qr-code-generateur-dialog',
  templateUrl: './qr-code-generateur-dialog.component.html',
  styleUrls: ['./qr-code-generateur-dialog.component.css']
})
export class QrCodeGenerateurDialogComponent implements OnInit {
  elementType = 'url';
  value = 'http://localhost:4200/';
  constructor(public dialogRef: MatDialogRef<QrCodeGenerateurDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private router: Router, private realTimeData: RealTimeDataService) { }

  ngOnInit() { }

  closePopUp() {
    this.dialogRef.close();
  }

  navigateTo() {
    if (this.data.isFrom == 'coach') {
      this.router.navigate(['']);
      let reqDto: ReqDto = new ReqDto();
      reqDto.session_id = this.data.session_id;
      reqDto.user = 'coach';
      this.realTimeData.startSession(reqDto);
    } else {
      this.router.navigate(['front/login']);
    }
  }
}
