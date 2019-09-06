import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { HttpHelperService } from 'src/app/services/http-helper.service';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-add-consultant',
  templateUrl: './add-consultant.component.html',
  styleUrls: ['./add-consultant.component.scss']
})
export class AddConsultantComponent implements OnInit {
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
      text: 'Consultant has been saved successfully',
      title: 'Success',
      type: 'success'
    });
    this.router.navigate(['admin/consultant']);
  }

  onFailure() {
    this.store.showLoader.next(false);
    this.showLoader = false;
    this.formMessage = 'Unexpected error occured';
    this.store.showGrowl.next({
      text: 'Error while creating consultant',
      title: 'Error',
      type: 'danger'
    });
  }
}
