import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpHelperService } from 'src/app/services/http-helper.service';
import { StoreService } from 'src/app/services/store.service';
import { isObject } from 'util';

@Component({
  selector: 'app-product-team-assign',
  templateUrl: './product-team-assign.component.html',
  styleUrls: ['./product-team-assign.component.scss']
})
export class ProductTeamAssignComponent implements OnInit {
  users: Array<any> = [];
  associates: Array<any> = [];
  consultants: Array<any> = [];
  assignForm: FormGroup;

  constructor(public dialogRef: MatDialogRef<ProductTeamAssignComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              private fb: FormBuilder,
              private http: HttpHelperService,
              private store: StoreService) { }

  ngOnInit() {
    this.assignForm = this.fb.group({
      associate: ['', Validators.required],
      consultant: ['', Validators.required]
    });

    if (this.data.productInfo) {
      if (isObject(this.data.productInfo.stakeHolders)) {
        this.assignForm.patchValue(this.data.productInfo.stakeHolders);
      }
    }

    this.fetchAssociates();
    this.fetchConsultants();
  }

  get control(): any { return this.assignForm.controls; }

  fetchAssociates() {
    this.http.find('users', { query: { role: 'Associate' }}).then((res: any) => {
      this.associates = res.data;
    });
  }

  fetchConsultants() {
    this.http.find('users', { query: { role: 'Consultant' }}).then((res: any) => {
      this.consultants = res.data;
    });
  }

  assignTeam() {
    const productInfo = this.data.productInfo;
    productInfo.stakeHolders = { lender: productInfo.lenderId, ...this.assignForm.value};


    this.http.patch('assets', productInfo._id, productInfo).then((res: any) => {
      this.dialogRef.close(true);
      this.store.showGrowl.next({
        text: 'Team has been assigned successfully',
        title: 'Success',
        type: 'success'
      });
    });
  }


}
