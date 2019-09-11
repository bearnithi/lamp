import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpHelperService } from 'src/app/services/http-helper.service';
import { StoreService } from 'src/app/services/store.service';
import { Location } from '@angular/common';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-consultant-my-profile',
  templateUrl: './consultant-my-profile.component.html',
  styleUrls: ['./consultant-my-profile.component.scss']
})
export class ConsultantMyProfileComponent implements OnInit {
  showLoader: boolean;
  formMessage: string;
  userInfo: any = {};

  constructor(
    public router: Router,
    private activatedRoute: ActivatedRoute,
    private httpHelper: HttpHelperService,
    private store: StoreService,
    private authentication: AuthenticationService,
    private location: Location) { }

  ngOnInit() {
    this.userInfo = this.authentication.getUserInfo() || {};
  }

  editUser(formData) {
    this.store.showLoader.next(true);
    this.httpHelper.patch('users', this.userInfo._id, formData)
      .then((response: any) => {
        this.onSuccess();
      }).catch((err) => {
        this.onFailure();
      });
  }

  registration(formData) {
      this.editUser(formData);
  }

  onSuccess() {
    this.store.showLoader.next(false);
    this.showLoader = false;
    this.formMessage = 'User registered successfully';
    this.store.showGrowl.next({
      text: 'Profile updated successfully',
      title: 'Success',
      type: 'success'
    });
    this.location.back();
  }

  onFailure() {
    this.store.showLoader.next(false);
    this.showLoader = false;
    this.formMessage = 'Unexpected error occured';
    this.store.showGrowl.next({
      text: 'Error while updating profile',
      title: 'Error',
      type: 'danger'
    });
  }

}
