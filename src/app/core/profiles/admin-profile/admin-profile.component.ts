import { Component, OnInit, Input, SimpleChanges, Output, EventEmitter, AfterViewInit, OnChanges } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { HttpHelperService } from 'src/app/services/http-helper.service';
import { Location } from '@angular/common';
import { ValidationService } from 'src/app/services/validation.service';
@Component({
  selector: 'app-admin-profile',
  templateUrl: './admin-profile.component.html',
  styleUrls: ['./admin-profile.component.scss']
})
export class AdminProfileComponent implements OnInit {

  @Input() isEdit: boolean;
  @Input() userID: any;
  adminProfileForm: FormGroup;
  fileName: any;
  profileImageName: any;
  profilPicData: any;
  @Output() formData = new EventEmitter<any>();
  states: Array<any> = [];
  cities: Array<any> = [];

  constructor(
    public router: Router,
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder,
    private http: HttpHelperService,
    public location: Location,
    public validationService: ValidationService) { }

  ngOnInit() {
    this.createForm();
    this.fetchState();
    this.listenForCity();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.isEdit) {
      if (this.userID) {
        this.bindUser();
      }
    }
  }

  fetchState() {
    this.http.getLocalInstance().get('/assets/json/statecity.json').then((res: any) => {
      this.states = res.data.states;
    });
  }

  listenForCity() {
    this.adminProfileForm.controls.state.valueChanges.subscribe((selectedState: any) => {
      this.cities = this.states.find((state) => state.state === selectedState).districts;
    });
  }

  bindUser() {
    this.http.find('users', { query: { _id: this.userID } }).then((res: any) => {
      console.log(res.data);
      if (res.data.length > 0) {
        this.adminProfileForm.removeControl('password');
        this.adminProfileForm.removeControl('email');
        this.adminProfileForm.updateValueAndValidity();
        this.adminProfileForm.patchValue(res.data[0]);
      }
    });
  }

  ngAfterViewInit(): void {

  }

  createForm() {
    this.adminProfileForm = this.fb.group({
      role: ['Associate'],
      profileImage: [''],
      firstName: ['', Validators.required],
      middleName: [''],
      lastName: ['', Validators.required],
      mobileNo: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [
        Validators.required,
        Validators.pattern('(?=\\D*\\d)(?=[^a-z]*[a-z])(?=[^A-Z]*[A-Z]).{8,30}')
      ]],
      address1: ['', Validators.required],
      address2: [''],
      state: ['', Validators.required],
      city: ['', Validators.required]
    });
  }

  get control(): any { return this.adminProfileForm.controls; }

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
    this.formData.emit(this.adminProfileForm.value);
  }


}
