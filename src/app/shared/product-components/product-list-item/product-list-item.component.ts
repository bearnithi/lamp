import { Component, OnInit, Input } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { HttpHelperService } from 'src/app/services/http-helper.service';
import { StoreService } from 'src/app/services/store.service';
import { MatDialog } from '@angular/material';
import { ProductTeamAssignComponent } from '../product-team-assign/product-team-assign.component';
import { isObject } from 'util';

@Component({
  selector: 'app-product-list-item',
  templateUrl: './product-list-item.component.html',
  styleUrls: ['./product-list-item.component.scss']
})
export class ProductListItemComponent implements OnInit {
  @Input() productInfo: any = {};
  role: string;
  userInfo: any = {};

  constructor(private authentication: AuthenticationService,
              private http: HttpHelperService,
              private store: StoreService,
              private dialog: MatDialog) { }

  ngOnInit() {
    this.userInfo = this.authentication.getUserInfo();
    this.role = this.authentication.getUserInfo().role;
  }

  addInterest() {
    this.http.create('userinterests', {
      assetId: this.productInfo._id,
      userId: this.userInfo._id
    }).then((res) => {
      this.store.showGrowl.next({
        text: 'You showed interest',
        title: 'Success',
        type: 'success'
      });


      if (isObject(this.productInfo.stakeHolders)) {
        this.productInfo.stakeHolders.buyer = this.userInfo._id;
      } else {
        this.productInfo.stakeHolders = {
          buyer: this.userInfo._id
        };
      }

      this.http.patch('assets', this.productInfo._id, this.productInfo).then((res: any) => {

      });
    });
  }

  assignTeam() {
    const dialog = this.dialog.open(ProductTeamAssignComponent, {
      width: '600px',
      data: {
        productInfo: this.productInfo
      }
    });

    dialog.afterClosed().subscribe((value: any) => {
      if (value) {

      }
    });
  }

  showAction() {
    this.store.showAction.next(this.productInfo);
  }

  activities() {
    this.store.showActivity.next({ show: true, data: this.productInfo });
  }

  navigateProductdetails(keyval) {
    this.store.getproductdetails(keyval);
  }

}
