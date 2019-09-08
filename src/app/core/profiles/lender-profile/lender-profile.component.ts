import { Component, OnInit, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { HttpHelperService } from 'src/app/services/http-helper.service';
import { Location } from '@angular/common';
import { ValidationService } from 'src/app/services/validation.service';

@Component({
  selector: 'app-lender-profile',
  templateUrl: './lender-profile.component.html',
  styleUrls: ['./lender-profile.component.scss']
})
export class LenderProfileComponent implements OnInit {

  @Input() isEdit: boolean;
  @Input() userID: any;
  addLenderForm: FormGroup;
  fileName: any;
  profileImageName: any;
  profilPicData: any;
  @Output() formData = new EventEmitter<any>();

  constructor(
    public router: Router,
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder,
    private http: HttpHelperService,
    public location: Location,
    public validationService: ValidationService) { }

  ngOnInit() {
    this.createForm();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.isEdit) {
      if (this.userID) {
        this.bindUser();
      }
    }
  }

  bindUser() {
    this.http.find('users', { query: { _id: this.userID } }).then((res: any) => {
      console.log(res.data);
      if (res.data.length > 0) {
        this.addLenderForm.removeControl('password');
        this.addLenderForm.removeControl('email');
        this.addLenderForm.updateValueAndValidity();
        this.addLenderForm.patchValue(res.data[0]);
      }
    });
  }

  createForm() {
    this.addLenderForm = this.fb.group({
      role: ['Lender'],
      profileImage: [''],
      bankName: ['', Validators.required],
      department: ['', Validators.required],
      firstName: ['', Validators.required],
      middleName: [''],
      lastName: ['', Validators.required],
      mobileNo: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [
        Validators.required,
        Validators.pattern('(?=\\D*\\d)(?=[^a-z]*[a-z])(?=[^A-Z]*[A-Z]).{8,30}')
      ]],
      address1: ['', Validators.required],
      address2: [''],
      state: ['', Validators.required],
      city: ['', Validators.required],
      webAdministratorDetails: this.fb.group({
        firstName: ['', Validators.required],
        middleName: [''],
        lastName: ['', Validators.required],
        mobileNo: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
      }),
      networkAdminDetails: this.fb.group({
        firstName: ['', Validators.required],
        middleName: [''],
        lastName: ['', Validators.required],
        mobileNo: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
      })
    });
  }

  get control(): any { return this.addLenderForm.controls; }

  get webAdminControls(): any {
    return this.control.webAdministratorDetails.controls;
  };

  get networkAdminControls(): any {
    return this.control.networkAdminDetails.controls;
  };


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
    this.formData.emit(this.addLenderForm.value);
  }


}
