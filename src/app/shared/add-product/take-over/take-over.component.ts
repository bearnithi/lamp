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
  selector: 'app-take-over',
  templateUrl: './take-over.component.html',
  styleUrls: ['./take-over.component.scss']
})
export class TakeOverComponent implements OnInit {

  takeOverDetailForm: FormGroup;

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
    this.takeOverDetailForm = this.fb.group({

      industry:[''],
      type:[''],
      constitution:[''],
      location:[''],
      lastYearTurnOver:[''],
      askingPrice:[''],
      modality:[''],
      lockinPeriod:[''],
      gapAnalysed:[''],
      negotiable:[''],
      fundsCommitment:[''],
      otherDetails:['']
    });
  }

  get control(): any { return this.takeOverDetailForm.controls; }


  addProduct(type){
    let data = {};
    data['assetType'] = type;
    data['assetId'] = UUID.UUID();
    data['assetDetails'] = this.takeOverDetailForm.value;

    

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
