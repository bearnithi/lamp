import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-close-auction',
  templateUrl: './close-auction.component.html',
  styleUrls: ['./close-auction.component.scss']
})
export class CloseAuctionComponent implements OnInit {
  Amount: FormControl;
  constructor(public dialogRef: MatDialogRef<CloseAuctionComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    this.Amount = new FormControl('', Validators.required);
    // if (this.data.amount) {
    //   this.Amount.setValue(this.data.amount);
    // }
  }

  savedata() {
      this.dialogRef.close(this.Amount.value);
  }



}
