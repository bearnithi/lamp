import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { ConfirmDialogComponent } from 'src/app/shared/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-consultant-master',
  templateUrl: './consultant-master.component.html',
  styleUrls: ['./consultant-master.component.scss']
})
export class ConsultantMasterComponent implements OnInit {
  users: Array<any> = [];
  constructor(public router: Router,
              public dialog: MatDialog) { }

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

}
