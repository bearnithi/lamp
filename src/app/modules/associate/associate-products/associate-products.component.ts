import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { StoreService } from 'src/app/services/store.service';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-associate-products',
  templateUrl: './associate-products.component.html',
  styleUrls: ['./associate-products.component.scss']
})
export class AssociateProductsComponent implements OnInit {
  filterObj: any = {};

  activitySubscription: Subscription;
  actionSubscription: Subscription;
  productdetailssubscribtion: Subscription;

  showActivity: boolean;
  showActivityDetail: boolean;

  selectedProduct: any = {};

  constructor(private store: StoreService,
              private authentication: AuthenticationService,
              private router: Router) { }

  ngOnInit() {
    this.productdetailssubscribtion = this.store.showproductdetails.subscribe((res) => {
      this.store.setValue('Selected_Product', res);
      this.selectedProduct = res;
      this.router.navigate(['associate', 'product-details']);
    });

    this.activitySubscription = this.store.showActivity.subscribe((res: any) => {
      this.showActivity = res.show || false;
      this.selectedProduct = res.data;
    });

    this.actionSubscription = this.store.showAction.subscribe((res: any) => {
      this.store.setValue('selected_product', res);
      this.selectedProduct = res;
      this.router.navigate(['associate', 'follow-up']);
    });

    this.filterObj = {
      'stakeHolders.associate': this.authentication.getUserInfo()._id
    };
  }

}
