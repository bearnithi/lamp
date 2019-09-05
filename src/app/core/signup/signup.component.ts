import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators, Form } from '@angular/forms';


import axios from "axios";
import { AxiosInstance } from "axios";
import { HttpHelperService } from 'src/app/services/http-helper.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  signUpForm: FormGroup;
  private axiosClient: AxiosInstance;
  submitted: boolean = false;
  showLoader: boolean = false;
  hasMessage: boolean = false;
  formMessage: string = "";

  @Output() login = new EventEmitter<boolean>();
  constructor(private fb: FormBuilder, private httpHelper: HttpHelperService) { }

  ngOnInit() {
    this.signUpForm = this.fb.group({
      role: ['', Validators.required],
      firstName: ['', Validators.required],
      middleName: ['', Validators.required],
      lastName: ['', Validators.required],
      mobileNo: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [
        Validators.required,
        Validators.pattern('(?=\\D*\\d)(?=[^a-z]*[a-z])(?=[^A-Z]*[A-Z]).{8,30}')
      ]]
    });

    this.axiosClient = axios.create({
      timeout: 3000,
      headers: {
        "X-Initialized-At": Date.now().toString()
      }
    });
  }


  get control(): any { return this.signUpForm.controls; }


  registration() {
    this.showLoader = true;
    this.hasMessage = false;
    const qry = { query: { email: this.signUpForm.value.email } };

    this.httpHelper.feathersInstance().service('users').find(qry)
      .then(res => {
        const isUserExist = res.data.length;
        if (isUserExist === 0) {
          this.httpHelper.getInstance().post('/users', this.signUpForm.value)
            .then((response) => {
              this.showLoader = false;
              this.hasMessage = true;
              this.formMessage = 'User registered successfully';
              setTimeout(() => {
                this.login.emit(false);
              }, 1000);
            })
            .catch((error) => {
              this.showLoader = false;
              this.hasMessage = true;
              this.formMessage = 'Unexpected error occured';
            });
        } else {
          this.showLoader = false;
          this.hasMessage = true;
          this.formMessage = 'User Already Exists';
        }
      });
  }

}
