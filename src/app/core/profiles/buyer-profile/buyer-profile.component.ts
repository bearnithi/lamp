import { Component, OnInit, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpHelperService } from 'src/app/services/http-helper.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-buyer-profile',
  templateUrl: './buyer-profile.component.html',
  styleUrls: ['./buyer-profile.component.scss']
})
export class BuyerProfileComponent implements OnInit {

  @Input() isEdit: boolean;
  addAssociateForm: FormGroup;
  fileName: any;
  profileImageName: any;
  profilPicData: any;
  @Output() formData = new EventEmitter<any>();

  constructor(
    public router: Router,
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder,
    private http: HttpHelperService,
    public location: Location) { }

  ngOnInit() {
    this.createForm();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.isEdit) {
      if (this.addAssociateForm) {
        this.addAssociateForm.controls.email.disable();
      }

    }
  }

  ngAfterViewInit(): void {
    if (this.isEdit) {
      if (this.addAssociateForm) {
        this.addAssociateForm.controls.email.disable();
      }

    }

  }

  createForm() {
    this.addAssociateForm = this.fb.group({
      userType: ['Associate'],
      profileImage: [''],
      firstName: ['', Validators.required],
      middleName: ['', Validators.required],
      lastName: ['', Validators.required],
      mobileNo: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [
        Validators.required,
        Validators.pattern('(?=\\D*\\d)(?=[^a-z]*[a-z])(?=[^A-Z]*[A-Z]).{8,30}')
      ]],
      address1: ['', Validators.required],
      address2: [''],
      street: ['', Validators.required],
      state: ['', Validators.required],
      city: ['', Validators.required],
      pan: ['', [Validators.required,
      Validators.pattern('^([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}?$')]],
      aadhar: ['', [Validators.required,
      Validators.pattern('^\d{4}\s\d{4}\s\d{4}$')]]
    });
  }

  get control(): any { return this.addAssociateForm.controls; }

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
    this.formData.emit(this.addAssociateForm.value);
  }

}
