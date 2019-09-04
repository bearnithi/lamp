import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators, Form } from '@angular/forms';


import axios from "axios";
import { AxiosInstance } from "axios";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  signUpForm: FormGroup;
  private axiosClient: AxiosInstance;
  submitted = false;

  @Output() login = new EventEmitter<boolean>();
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.signUpForm = this.fb.group({
      userType: ['', Validators.required],
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


  registration(form: Form) {
    this.axiosClient.post('http://192.168.2.189:43030/users', form['value'])
      .then( (response) => {
        console.log(response);
      })
      .catch( (error) => {
        console.log(error);
      });
  }

}
