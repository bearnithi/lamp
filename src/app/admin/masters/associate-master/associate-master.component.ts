import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { ConfirmDialogComponent } from 'src/app/shared/confirm-dialog/confirm-dialog.component';
import { HttpHelperService } from 'src/app/services/http-helper.service';

@Component({
  selector: 'app-associate-master',
  templateUrl: './associate-master.component.html',
  styleUrls: ['./associate-master.component.scss']
})
export class AssociateMasterComponent implements OnInit {
  users: Array<any> = [];
  showLoader: boolean;
  constructor(public router: Router,
    public dialog: MatDialog,
    public httpHelper: HttpHelperService) { }

  ngOnInit() {
    this.users = [{
      name: 'John',
      role: 'Associate',
      src: 'http://demo.interface.club/limitless/demo/bs4/Template/global_assets/images/demo/users/face2.jpg'
    }, {
      name: 'Kevin Paul',
      role: 'Associate',
      src: 'http://demo.interface.club/limitless/demo/bs4/Template/global_assets/images/demo/users/face2.jpg'
    }, {
      name: 'Benjamin Clarke',
      role: 'Associate',
      src: 'http://demo.interface.club/limitless/demo/bs4/Template/global_assets/images/demo/users/face2.jpg'
    }];

    this.fetchAssociates();
  }

  edit(userInfo: any) {
    this.router.navigate(['admin', 'add-associate', 'edit']);
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

      }
    });
  }

  fetchAssociates() {
    this.showLoader = true;
    const qry = { query: {} };

    this.httpHelper.feathersInstance().service('associates').find(qry)
      .then(res => {
        console.log(res.data);
        this.users = res.data || [];
      });
  }

}
