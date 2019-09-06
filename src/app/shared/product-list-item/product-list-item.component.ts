import { Component, OnInit, Input } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { HttpHelperService } from 'src/app/services/http-helper.service';
import { StoreService } from 'src/app/services/store.service';

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
              private store: StoreService) { }

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
    });
  }

}
