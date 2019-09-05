import { Component, OnInit, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';
import { Location } from '@angular/common';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpHelperService } from 'src/app/services/http-helper.service';
import { ValidationService } from 'src/app/services/validation.service';

@Component({
  selector: 'app-stock-lots',
  templateUrl: './stock-lots.component.html',
  styleUrls: ['./stock-lots.component.scss']
})
export class StockLotsComponent implements OnInit {

  addStockLotForm: FormGroup;

  constructor( public router: Router,
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder,
    private http: HttpHelperService,
    public location: Location,
    public validation: ValidationService) { }
    public items : any = [];

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

    });
  }

  get control(): any { return this.addStockLotForm.controls; }

}
