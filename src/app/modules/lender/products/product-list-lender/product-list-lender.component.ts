import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { StoreService } from 'src/app/services/store.service';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-product-list-lender',
  templateUrl: './product-list-lender.component.html',
  styleUrls: ['./product-list-lender.component.scss']
})
export class ProductListLenderComponent implements OnInit {
  filterObj: any = {};

  activitySubscription: Subscription;
  actionSubscription: Subscription;
  productdetailssubscribtion: Subscription;

  showActivity: boolean;
  showActivityDetail: boolean;

  constructor(private store: StoreService,
              private authentication: AuthenticationService,
              private router: Router) { }

  ngOnInit() {
    this.productdetailssubscribtion = this.store.showproductdetails.subscribe((res) => {
      this.store.setValue('Selected_Product', res);
      this.router.navigate(['lender', 'product-details']);
    });

    this.activitySubscription = this.store.showActivity.subscribe((res: any) => {
      this.showActivity = res.show || false;
    });

    this.actionSubscription = this.store.showAction.subscribe((res: any) => {
      this.store.setValue('selected_product', res);
      this.router.navigate(['lender', 'follow-up']);
    });

    this.filterObj = {
      lenderId: this.authentication.getUserInfo()._id
    };
  }

}
