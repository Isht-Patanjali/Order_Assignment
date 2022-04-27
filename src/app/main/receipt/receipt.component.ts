import {Component, Inject, OnInit} from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from "@angular/material/dialog";

@Component({
  selector: 'ngx-receipt',
  templateUrl: 'receipt.component.html',
  styleUrls: ['receipt.component.scss'],
})
export class ReceiptComponent implements OnInit {
  local_data: any;
  receiptData: any;

  constructor(
    public dialogRef: MatDialogRef<ReceiptComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    this.local_data = {...this.data};
    this.receiptData = this.local_data.data
    // console.log(this.receiptData);
    // console.log('faffafdfdfdffd');
  }

  onCancel(close: boolean): void {
    this.dialogRef.close(close);
  }

}
