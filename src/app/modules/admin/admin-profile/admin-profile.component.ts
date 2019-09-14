import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpHelperService } from 'src/app/services/http-helper.service';
import { StoreService } from 'src/app/services/store.service';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-admin-myprofile',
  templateUrl: './admin-profile.component.html',
  styleUrls: ['./admin-profile.component.scss']
})
export class AdminProfileComponent implements OnInit {
  showLoader: boolean;
  formMessage: string;
  userInfo: any = {};

  constructor(
    public router: Router,
    private activatedRoute: ActivatedRoute,
    private httpHelper: HttpHelperService,
    private store: StoreService,
    private authentication: AuthenticationService) { }

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
    this.router.navigate(['admin/admin-dashboard']);
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
