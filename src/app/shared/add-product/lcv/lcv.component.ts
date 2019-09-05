import { Component, OnInit, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';
import { Location } from '@angular/common';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpHelperService } from 'src/app/services/http-helper.service';
import { ValidationService } from 'src/app/services/validation.service';

@Component({
  selector: 'app-lcv',
  templateUrl: './lcv.component.html',
  styleUrls: ['./lcv.component.scss']
})
export class LcvComponent implements OnInit {

  addLcvDetailForm: FormGroup;

  constructor( public router: Router,
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder,
    private http: HttpHelperService,
    public location: Location,
    public validation: ValidationService) { }

  ngOnInit() {
    this.createForm();
  }


  createForm() {
    this.addLcvDetailForm = this.fb.group({

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
      insuranceValidityEndDate:['']
    });
  }

  get control(): any { return this.addLcvDetailForm.controls; }

}
