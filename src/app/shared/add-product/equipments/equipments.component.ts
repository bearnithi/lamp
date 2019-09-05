import { Component, OnInit, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';
import { Location } from '@angular/common';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpHelperService } from 'src/app/services/http-helper.service';
import { ValidationService } from 'src/app/services/validation.service';

@Component({
  selector: 'app-equipments',
  templateUrl: './equipments.component.html',
  styleUrls: ['./equipments.component.scss']
})
export class EquipmentsComponent implements OnInit {

  addEquipmentDetailForm: FormGroup;

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
    this.addEquipmentDetailForm = this.fb.group({

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

  get control(): any { return this.addEquipmentDetailForm.controls; }

}
