import { Component, OnInit, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpHelperService } from 'src/app/services/http-helper.service';
import { Location } from '@angular/common';
import { ValidationService } from 'src/app/services/validation.service';

@Component({
  selector: 'app-borrower-profile',
  templateUrl: './borrower-profile.component.html',
  styleUrls: ['./borrower-profile.component.scss']
})
export class BorrowerProfileComponent implements OnInit {
  @Input() isEdit: boolean;
  borrowerForm: FormGroup;
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
      this.borrowerForm.controls.email.disable();
    }
  }

  createForm() {
    this.borrowerForm = this.fb.group({
      userType: ['Lender'],
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
      city: ['', Validators.required]
    });
  }

  get control(): any { return this.borrowerForm.controls; }

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
    this.formData.emit(this.borrowerForm.value);
  }


}
