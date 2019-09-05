import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { HttpHelperService } from 'src/app/services/http-helper.service';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.scss']
})
export class MyProfileComponent implements OnInit {
  public isEdit: boolean;
  showLoader: boolean;
  formMessage: string;
  userInfo: any = {};

  constructor(
    public router: Router,
    private activatedRoute: ActivatedRoute,
    private httpHelper: HttpHelperService,
    private store: StoreService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.isEdit = params.type === 'edit' || false;

      if (this.isEdit) {
        this.userInfo = this.store.getValue('user_info');
      }
    });
  }

  addUser(formData) {
    this.store.showLoader.next(true);
    this.httpHelper.getInstance().post('/users', formData).then((response) => {
      this.onSuccess();
    }).catch((error) => {
      this.onFailure();
    });
  }

  editUser(formData) {
    this.store.showLoader.next(true);
    this.httpHelper.update('users', this.userInfo._id, formData)
      .then((response: any) => {
        this.onSuccess();
      }).catch((err) => {
        this.onFailure();
      });
  }

  registration(formData) {
    this.showLoader = true;

    if (this.isEdit) {
      this.editUser(formData);
    } else {
      this.addUser(formData);
    }


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
    this.router.navigate(['buyer/buyer-dashboard']);
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
