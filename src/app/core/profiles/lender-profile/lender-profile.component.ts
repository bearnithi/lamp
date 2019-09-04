import { Component, OnInit, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { HttpHelperService } from 'src/app/services/http-helper.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-lender-profile',
  templateUrl: './lender-profile.component.html',
  styleUrls: ['./lender-profile.component.scss']
})
export class LenderProfileComponent implements OnInit {
  @Input() isEdit: boolean;
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
    public location: Location) { }

  ngOnInit() {
    this.createForm();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.isEdit) {
      this.addLenderForm.controls.email.disable();
    }
  }

  createForm() {
    this.addLenderForm = this.fb.group({
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

  get control(): any { return this.addLenderForm.controls; }

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
