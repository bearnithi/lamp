import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { HttpHelperService } from 'src/app/services/http-helper.service';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-add-associte',
  templateUrl: './add-associte.component.html',
  styleUrls: ['./add-associte.component.scss']
})
export class AddAssociteComponent implements OnInit {
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
        this.userInfo = this.store.getValue('selected_user');
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
    this.httpHelper.patch('users', this.userInfo._id, formData)
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
      text: 'Associate has been saved successfully',
      title: 'Success',
      type: 'success'
    });
    this.router.navigate(['admin/associate']);
  }

  onFailure() {
    this.store.showLoader.next(false);
    this.showLoader = false;
    this.formMessage = 'Unexpected error occured';
    this.store.showGrowl.next({
      text: 'Error while creating associate',
      title: 'Error',
      type: 'danger'
    });
  }





}
