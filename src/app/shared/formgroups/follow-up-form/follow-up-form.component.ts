import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { StoreService } from 'src/app/services/store.service';
import { HttpHelperService } from 'src/app/services/http-helper.service';
import { Location } from '@angular/common';
import { AuthenticationService } from 'src/app/services/authentication.service';

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
              private router: Router,
              private authentication: AuthenticationService) { }

  ngOnInit() {
    this.productInfo = this.store.getValue('selected_product');
    this.followUpForm = this.fb.group({
      to: ['', Validators.required],
      type: ['', Validators.required],
      sheduleDate: [''],
      message: ['']
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
    this.httpHelper.find('users', { query: { role: { $in: ['Associate', 'Consultant', 'Buyer'] } } }).then((res: any) => {
      const result = [];
      if (res.data.length > 0) {
        for (const id of userIDs) {
          for (const user of res.data) {
            if (user._id === id) {
              result.push(user);
            }
          }
        }
      }
      this.stakeHolders = result || [];
    });
  }

  fetchTypes() {

    //this.types = ['Follow-Up', 'Shedule'];
    let setup = {
      'Residential-Flat':[{
        "name":"Physical Visit",
        "template_content":"<b>Test</b>"
      },{
        "name":"Property Inspection",
        "template_content":""
      },{
        "name":"Legal Document Verification",
        "template_content":""
      },{
        "name":"Guide for E-Auction",
        "template_content":""
      }],
      'Residential-House':[{
        "name":"Physical Visit",
        "template_content":"<b>Test</b>"
      },{
        "name":"Property Inspection",
        "template_content":""
      },{
        "name":"Legal Document Verification",
        "template_content":""
      },{
        "name":"Guide for E-Auction",
        "template_content":""
      }],
      'Commercial-Building':[{
        "name":"Physical Visit",
        "template_content":""
      },{
        "name":"Property Inspection",
        "template_content":""
      },{
        "name":"Legal Document Verification",
        "template_content":""
      },{
        "name":"Guide for E-Auction",
        "template_content":""
      }],
      'Cars':[
        {
          "name":"Physical visit",
          "template_content":""
        },{
          "name":"Vehicle Inspection",
          "template_content":""
        },{
          "name":"Get additional information about the offer",
          "template_content":""
        },{
          "name":"Guide for E-Auction",
          "template_content":""
        }
      ],
      'LCV':[
        {
          "name":"Physical visit",
          "template_content":""
        },{
          "name":"Vehicle Inspection",
          "template_content":""
        },{
          "name":"Get additional information about the offer",
          "template_content":""
        },{
          "name":"Guide for E-Auction",
          "template_content":""
        }
      ],
      'Machinery':[
        {
          "name":"Physical visit",
          "template_content":""
        },{
          "name":"Equipment inspection",
          "template_content":""
        },{
          "name":"Verify machinery document with professional valuer",
          "template_content":""
        },{
          "name":"Verify machinery document without professional valuer",
          "template_content":""
        },{
          "name":"Get additional information about the offer",
          "template_content":""
        },{
          "name":"Guide for E-Auction",
          "template_content":""
        }
      ], 'Equipment':[
        {
          "name":"Physical visit",
          "template_content":""
        },{
          "name":"Equipment inspection",
          "template_content":""
        },{
          "name":"Verify equipment document with professional valuer",
          "template_content":""
        },{
          "name":"Verify equipment document without professional valuer",
          "template_content":""
        },{
          "name":"Get additional information about the offer",
          "template_content":""
        },{
          "name":"Guide for E-Auction",
          "template_content":""
        }
      ],
      'Take-Over':[
        {
          "name":"Arrange for physical inspection",
          "template_content":""
        },{
          "name":"Provide document related to asset for inspection",
          "template_content":""
        },{
          "name":"Get questionnaire from potential buyer and answer from lender",
          "template_content":""
        },{
          "name":"Guide for E-Auction",
          "template_content":""
        }
      ],
      'Stock-lots':[
        {
          "name":"Physical visit to inspect/review sample",
          "template_content":""
        },{
          "name":"Get technical details of stock lot",
          "template_content":""
        },{
          "name":"Guide for E-Auction",
          "template_content":""
        }
      ]
    }

    this.types = setup[this.productInfo.assetType];


  }

  registerFollowup() {
    if (this.isEdit) {
      this.editFollowup();
    } else {
      this.addFollowup();
    }
  }

  onTypeChange(){
    this.followUpForm.get("message").setValue(this.followUpForm.get("type").value['template_content']);
  }

  addFollowup() {
    this.store.showLoader.next(true);
    const data = this.followUpForm.value;
    data.assetId = this.productInfo._id;
    data.from = this.authentication.getUserInfo()._id;
    data.lenderId = this.productInfo.lenderId;
    data.createdDate = new Date();
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
    this.location.back();
  }

  onFailure() {
    this.store.showLoader.next(false);

    this.store.showGrowl.next({
      text: 'Error while saving',
      title: 'Error',
      type: 'danger'
    });
    this.location.back();
  }

}
