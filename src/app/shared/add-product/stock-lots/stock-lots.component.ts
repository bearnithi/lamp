import { Component, OnInit, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';
import { Location } from '@angular/common';
import { FormGroup, FormBuilder, Validators, FormArray, } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpHelperService } from 'src/app/services/http-helper.service';
import { ValidationService } from 'src/app/services/validation.service';
import { UUID } from 'angular2-uuid';
import { StoreService } from 'src/app/services/store.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-stock-lots',
  templateUrl: './stock-lots.component.html',
  styleUrls: ['./stock-lots.component.scss']
})
export class StockLotsComponent implements OnInit {

  addStockLotForm: FormGroup;
  items: FormArray;


  constructor( public router: Router,
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder,
    private http: HttpHelperService,
    public location: Location,
    public validation: ValidationService,public productService:ProductService,
    private store:StoreService) { }

  ngOnInit() {
    this.createForm()
  }


  createForm() {
    this.addStockLotForm = this.fb.group({

      terms:[''],
      inspection:[''],
      addressLine1:[''],
      addressLine2:[''],
      state:[''],
      city:[''],
      nature:[''],
      items: this.fb.array([ this.createItem() ])
    });
  }


  createItem(): FormGroup {
    return this.fb.group({
      description: '',
      price: ''
    });
  }

  addItem(): void {
    this.items = this.addStockLotForm.get('items') as FormArray;
    this.items.push(this.createItem());
  }

  get control(): any { return this.addStockLotForm.controls; }


  addProduct(type){
    let data = {};
    data['assetType'] = type;
    data['assetId'] = UUID.UUID();
    data['assetDetails'] = this.addStockLotForm.value;

    

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
