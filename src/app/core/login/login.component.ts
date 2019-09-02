import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  @Output() signup = new EventEmitter<boolean>();
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.loginForm  = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

}
