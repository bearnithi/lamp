import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { ConfirmDialogComponent } from 'src/app/shared/dialog-notification-components/confirm-dialog/confirm-dialog.component';
import { HttpHelperService } from 'src/app/services/http-helper.service';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-consultant-master',
  templateUrl: './consultant-master.component.html',
  styleUrls: ['./consultant-master.component.scss']
})
export class ConsultantMasterComponent implements OnInit {
  users: Array<any> = [];
  showLoader: boolean;
  constructor(public router: Router,
    public dialog: MatDialog,
    public httpHelper: HttpHelperService,
    public store: StoreService) { }

  ngOnInit() {
    this.fetchConsultants();
  }

  edit(userInfo: any) {
    this.store.setValue('selected_user', userInfo);
    this.router.navigate(['admin', 'add-consultant', 'edit']);
  }

  approve(userInfo) {
    this.store.showLoader.next(true);
    userInfo.status = 'APPROVED';
    this.httpHelper.patch('users', userInfo._id, userInfo)
      .then((response: any) => {
        this.onSuccess();
      }).catch((err) => {
        this.onFailure();
      });
}

onSuccess() {
  this.store.showLoader.next(false);
  this.showLoader = false;
  this.store.showGrowl.next({
    text: 'Consultant has been approved successfully',
    title: 'Success',
    type: 'success'
  });
}

onFailure() {
  this.store.showLoader.next(false);
  this.showLoader = false;
  this.store.showGrowl.next({
    text: 'Error while creating associate',
    title: 'Error',
    type: 'danger'
  });
}


  confirmDelete(userInfo: any) {
    const dialog = this.dialog.open(ConfirmDialogComponent, {
      width: '400px',
      data: {
        message: 'Are you sure to delete this user?'
      }
    });

    dialog.afterClosed().subscribe((isDelete: boolean) => {
      if (isDelete) {
        this.httpHelper.remove('users', userInfo._id).then((res) => {
          this.fetchConsultants();
        });

      }
    });
  }

  fetchConsultants() {
    this.showLoader = true;
    const qry = { query: { role: 'Consultant' } };

    this.httpHelper.feathersInstance().service('users').find(qry)
      .then(res => {
        console.log(res.data);
        this.users = res.data || [];
      });
  }
}
