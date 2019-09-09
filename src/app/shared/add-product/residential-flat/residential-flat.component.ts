
import { Component, OnInit, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';
import { Location } from '@angular/common';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpHelperService } from 'src/app/services/http-helper.service';
import { ValidationService } from 'src/app/services/validation.service';
import { ProductService } from 'src/app/services/product.service';
import { UUID } from 'angular2-uuid';
import { GrowlComponent } from '../../dialog-notification-components/growl/growl.component';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-residential-flat',
  templateUrl: './residential-flat.component.html',
  styleUrls: ['./residential-flat.component.scss']
})
export class ResidentialFlatComponent implements OnInit {

  addResendentialPropertyForm: FormGroup;

  constructor( public router: Router,
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder,
    private http: HttpHelperService,
    public location: Location,
    public validation: ValidationService,
    public productService:ProductService,
    private store:StoreService) { }

  ngOnInit() {
    this.createForm();
  }


  createForm() {
    this.addResendentialPropertyForm = this.fb.group({

      buildInYear: [''],
      buildingArea:[''],
      carpetArea:[''],
      bhk:[''],
      guideLineValue:[''],
      marketValue:[''],
      fairRentalValue:[''],
      floorPrice:[''],
      addressLine1:[''],
      addressLine2:[''],
      state:[''],
      city:[''],
      builderCompany:[''],
      builderCity:[''],
      amenties:['']
    });
  }

  get control(): any { return this.addResendentialPropertyForm.controls; }


  addProduct(type){
    let data = {};
    data['assetType'] = type;
    data['assetId'] = UUID.UUID();
    data['assetDetails'] = this.addResendentialPropertyForm.value;



    this.productService.saveProductInfo(data).then((response)=>{
      this.store.showGrowl.next({
        text: 'Asset has been saved successfully',
        title: 'Success',
        type: 'success'
      });
    }).catch((error)=>{
      this.store.showGrowl.next({
        text: 'Error while creating asset',
        title: 'Error',
        type: 'danger'
      });
    })
  }
}
