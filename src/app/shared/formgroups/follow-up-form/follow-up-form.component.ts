import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { StoreService } from 'src/app/services/store.service';
import { HttpHelperService } from 'src/app/services/http-helper.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-follow-up-form',
  templateUrl: './follow-up-form.component.html',
  styleUrls: ['./follow-up-form.component.scss']
})
export class FollowUpFormComponent implements OnInit {
  followUpForm: FormGroup;
  stakeHolders: Array<any> = [];
  types: Array<any> = [];
  assets: Array<any> = [];
  lenderAsset: Array<any> = [];
  isEdit: boolean;
  selectedFollowup: any = {};
  productInfo: any = {};

  constructor(private fb: FormBuilder,
              public location: Location,
              public dialog: MatDialog,
              private activatedRoute: ActivatedRoute,
              private store: StoreService,
              private httpHelper: HttpHelperService,
              private router: Router) { }

  ngOnInit() {
    this.productInfo = this.store.getValue('selected_product');
    this.followUpForm = this.fb.group({
      to: ['', Validators.required],
      type: ['', Validators.required],
      query: ['']
    });

    this.activatedRoute.params.subscribe((params: Params) => {
      this.isEdit = params.type === 'edit' || false;

      if (this.isEdit) {
        this.selectedFollowup = this.store.getValue('selected_followup');
        this.followUpForm.patchValue(this.selectedFollowup);
      }
    });

    this.fetchStakeHolders();
    this.fetchTypes();
    this.listenForType();
  }



  get control(): any {
    return this.followUpForm.controls;
  }

  listenForType() {
    this.control.type.valueChanges.subscribe((type: any) => {
      if (type === 'Shedule') {
        const sheduleDate = new FormControl('', Validators.required);
        this.followUpForm.addControl('sheduleDate', sheduleDate);
      } else {
        this.followUpForm.removeControl('sheduleDate');
      }
    });
  }

  fetchStakeHolders() {
    const userIDs = []
    for (const id in this.productInfo.stakeHolders) {
      if (this.productInfo.stakeHolders.hasOwnProperty(id)) {
        userIDs.push(this.productInfo.stakeHolders[id]);
      }

    }
    this.httpHelper.find('users', {query: { _id: { $in: userIDs }  }}).then((res: any) => {
      this.stakeHolders = res.data;
    });
  }

  fetchTypes() {
    this.types = ['Follow-Up', 'Shedule'];
  }

  registerFollowup() {
    if (this.isEdit) {
      this.editFollowup();
    } else {
      this.addFollowup();
    }
  }

  addFollowup() {
    this.store.showLoader.next(true);
    this.httpHelper.create('followup', this.followUpForm.value).then((res: any) => {
      this.onSuccess();
    }).catch((err) => {
      this.onFailure();
    });
  }

  editFollowup() {
    this.store.showLoader.next(true);
    this.httpHelper.patch('followup', this.selectedFollowup._id, this.followUpForm.value)
      .then((response: any) => {
        this.onSuccess();
      }).catch((err) => {
        this.onFailure();
      });
  }

  onSuccess() {
    this.store.showLoader.next(false);
    this.store.showGrowl.next({
      text: 'Data has been saved successfully',
      title: 'Success',
      type: 'success'
    });
  }

  onFailure() {
    this.store.showLoader.next(false);

    this.store.showGrowl.next({
      text: 'Error while saving',
      title: 'Error',
      type: 'danger'
    });
  }

}
