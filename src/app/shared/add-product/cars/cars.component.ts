
import { Component, OnInit, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';
import { Location } from '@angular/common';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpHelperService } from 'src/app/services/http-helper.service';
import { ValidationService } from 'src/app/services/validation.service';
import { UUID } from 'angular2-uuid';
import { StoreService } from 'src/app/services/store.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss']
})
export class CarsComponent implements OnInit {

  addCarDetailForm: FormGroup;
  images: FormArray;

  bindImages:any = [];

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
    this.addCarDetailForm = this.fb.group({

      make:[''],
      model:[''],
      variant:[''],
      year:[''],
      kmRun:[''],
      noOfOwners:[''],
      marketPrice:[''],
      floorPrice:[''],
      valuedBy:[''],
      mentions:[''],
      insuranceCompany:[''],
      insuranceValidityEndDate:[''],
      images: this.fb.array([ this.createItem() ])
    });
  }

  createItem(): FormGroup {
    return this.fb.group({
      caption: '',
      file: ''
    });
  }


  deleteItem(i){
    
    this.images.removeAt(i)
  }

  addItem(): void {
    this.images = this.addCarDetailForm.get('images') as FormArray;
    this.images.push(this.createItem());
  }


  handleFileUpload(e,index) {
    const file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];
    const pattern = /image-*/;

    let temp = "";

    const reader = new FileReader();

    if (!file.type.match(pattern)) {
      return 'invalid format';
    }

    reader.onload = event => {
      const fReader: any = event.target;
      temp = fReader.result;

      this.addCarDetailForm.value.images[index]['file'] = temp;
    };

    reader.readAsDataURL(file);
  }


  getImageUrl(index){
    return this.addCarDetailForm.value.images[index]['file'];
  }

  get control(): any { return this.addCarDetailForm.controls; }

  addProduct(type){
    let data = {};
    data['assetType'] = type;
    data['assetId'] = UUID.UUID();
    data['assetDetails'] = this.addCarDetailForm.value;

    

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
