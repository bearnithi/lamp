
import { Component, OnInit, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';
import { Location } from '@angular/common';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpHelperService } from 'src/app/services/http-helper.service';
import { ValidationService } from 'src/app/services/validation.service';

@Component({
  selector: 'app-commercial-building',
  templateUrl: './commercial-building.component.html',
  styleUrls: ['./commercial-building.component.scss']
})
export class CommercialBuildingComponent implements OnInit {

  addCommercialPropertyForm: FormGroup;

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
    this.addCommercialPropertyForm = this.fb.group({

      buildInYear: [''],
      buildingArea:[''],
      carpetArea:[''],
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
      amenties:[''],
      description:['']
    });
  }

  get control(): any { return this.addCommercialPropertyForm.controls; }
}
