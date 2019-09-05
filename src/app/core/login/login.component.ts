import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpHelperService } from 'src/app/services/http-helper.service';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  @Output() signup = new EventEmitter<boolean>();
  showLoader: boolean;
  submitted: boolean;
  hasMessage: boolean;
  formMessage: string;
  dashboards: any = {
    Lender: 'lender/lender-dashboard',
    Admin: 'admin/admin-dashboard',
    Buyer: 'buyer/buyer-dashboard',
    Borrower: 'borrower/borrower-dashboard',
    Associate: 'associate/associate-dashboard',
    Facilitator: 'facilitator/facilitator-dashboard',
    Consultant: 'consulatant/consultant-dashboard'
  };

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private httpHelper: HttpHelperService,
    private authentication: AuthenticationService) { }


  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  login() {
    this.hasMessage = false;
    this.showLoader = true;
    this.httpHelper.feathersInstance().authenticate({
      strategy: 'local',
      email: this.loginForm.value.email,
      password: this.loginForm.value.password
    }).then((response) => {
      this.showLoader = false;
      this.hasMessage = true;
      if (response.accessToken !== undefined) {
        this.formMessage = 'User authenticated successfully';
        this.navigateToDashboard(response.role);
        this.authentication.setUserInfo(response.name);
        localStorage.setItem('feathers-jwt', response.accessToken);
      } else {
        this.formMessage = 'Email or password incorrect';
      }

    }).catch((error) => {
      this.showLoader = false;
      this.hasMessage = true;
      this.formMessage = 'Email or password incorrect';
    });



  }

  navigateToDashboard(role: string) {
    this.router.navigate([this.dashboards[role]]);
  }

}
