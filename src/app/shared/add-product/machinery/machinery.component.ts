import { Component, OnInit, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';
import { Location } from '@angular/common';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpHelperService } from 'src/app/services/http-helper.service';
import { ValidationService } from 'src/app/services/validation.service';
import { UUID } from 'angular2-uuid';
import { StoreService } from 'src/app/services/store.service';
import { ProductService } from 'src/app/services/product.service';


@Component({
  selector: 'app-machinery',
  templateUrl: './machinery.component.html',
  styleUrls: ['./machinery.component.scss']
})
export class MachineryComponent implements OnInit {

  addMachineryDetailForm: FormGroup;

  constructor(public router: Router,
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder,
    private http: HttpHelperService,
    public location: Location,
    public validation: ValidationService,public productService:ProductService,
    private store:StoreService
) { }

  ngOnInit() {
    this.createForm();
  }


  createForm() {
    this.addMachineryDetailForm = this.fb.group({
      type: [''],
      manufacturerName: [''],
      description: [''],
      make: [''],
      model: [''],
      variant: [''],
      year: [''],
      kmRun: [''],
      noOfOwners: [''],
      marketPrice: [''],
      floorPrice: [''],
      valuedBy: [''],
      mentions: [''],
      insuranceCompany: [''],
      purchaseDate: [''],
      techSpecs: [''],
      invoicePrice: [''],
      insuranceValidityEndDate: [''],
      addressLine1: [''],
      addressLine2: [''],
      state: [''],
      city: ['']
    });
  }

  get control(): any { return this.addMachineryDetailForm.controls; }

  addProduct(type){
    let data = {};
    data['assetType'] = type;
    data['assetId'] = UUID.UUID();
    data['assetDetails'] = this.addMachineryDetailForm.value;

    

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
