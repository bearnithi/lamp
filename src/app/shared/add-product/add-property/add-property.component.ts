import { Component, OnInit, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';
import { Location } from '@angular/common';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpHelperService } from 'src/app/services/http-helper.service';
import { ValidationService } from 'src/app/services/validation.service';
@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.scss']
})
export class AddPropertyComponent implements OnInit {

  @Input() isEdit: boolean;
  addPropertyForm: FormGroup;
  fileName: any;
  profileImageName: any;
  profilPicData: any;
  @Output() formData = new EventEmitter<any>();
  properties: Array<any> = [];

  constructor(
    public router: Router,
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder,
    private http: HttpHelperService,
    public location: Location,
    public validation: ValidationService) { }

  ngOnInit() {
    this.createForm();
    this.properties = [
      { name: 'Property', children: [] },
      { name: 'Plant and Machineries', children: [] },
      { name: 'Vehicles', children: [] },
      { name: 'Jewellery', children: [] },
      { name: 'Equipments', children: [] },
      { name: 'Stock-Lots', children: [] },
      { name: 'Takeover Offers', children: [] },
      { name: 'Others', children: [] }
    ];
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.isEdit) {
      if (this.addPropertyForm) {
        this.addPropertyForm.controls.email.disable();
      }

    }
  }

  ngAfterViewInit(): void {
    if (this.isEdit) {
      if (this.addPropertyForm) {
        this.addPropertyForm.controls.email.disable();
      }

    }

  }

  createForm() {
    this.addPropertyForm = this.fb.group({
      profileImage: [''],
      propertyName: ['', Validators.required],
      ageOfTheAsset: ['', Validators.required],
      buildingArea: ['', Validators.required],
      carpetArea: ['', Validators.required],
      amenities: ['', Validators.required],
      builders: ['', Validators.required],
      guideLineValue: ['', Validators.required],
      marketValue: ['', Validators.required],
      fairRentalValue: ['', Validators.required],
      floorPrice: ['', Validators.required],
      addressLine1: ['', Validators.required],
      addressLine2: [''],
      state: ['', Validators.required],
      city: ['', Validators.required],
      buildInYear: ['', Validators.required],
      builderCity: ['', Validators.required],
      bhk: ['', Validators.required]
    });
  }

  get control(): any { return this.addPropertyForm.controls; }

  handleFileUpload(e) {
    const file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];
    const pattern = /image-*/;
    this.fileName = file.name;
    const reader = new FileReader();

    if (!file.type.match(pattern)) {
      return 'invalid format';
    }
    this.profileImageName = file.name;
    reader.onload = event => {
      const fReader: any = event.target;
      this.profilPicData = fReader.result;
    };

    reader.readAsDataURL(file);
  }

  registration() {
    this.formData.emit(this.addPropertyForm.value);
  }

  addProduct() {

  }


}
