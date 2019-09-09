import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SharedModule } from '../shared/shared.module';
import { HeaderComponent } from './header/header.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SignupComponent } from './signup/signup.component';

import {
  AssociateProfileComponent,
  LenderProfileComponent,
  BuyerProfileComponent,
  BorrowerProfileComponent,
  ConsultantProfileComponent,
  AdminProfileComponent
 } from './profiles';


@NgModule({
  declarations: [LoginComponent,
    HeaderComponent,
    SignupComponent,
    AssociateProfileComponent,
    LenderProfileComponent,
    BuyerProfileComponent,
    BorrowerProfileComponent,
    ConsultantProfileComponent,
    AdminProfileComponent],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule
  ],
  exports: [
    LoginComponent,
    SignupComponent,
    HeaderComponent,
    AssociateProfileComponent,
    LenderProfileComponent,
    BuyerProfileComponent,
    BorrowerProfileComponent,
    ConsultantProfileComponent
  ]
})
export class CoreModule { }
