import { Component, OnInit } from '@angular/core';
import { StoreService } from 'src/app/services/store.service';
import { Subscription } from 'rxjs';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-consultant-products',
  templateUrl: './consultant-products.component.html',
  styleUrls: ['./consultant-products.component.scss']
})
export class ConsultantProductsComponent implements OnInit {
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
      this.router.navigate(['consultant', 'product-details']);
    });

    this.activitySubscription = this.store.showActivity.subscribe((res: any) => {
      this.showActivity = res.show || false;
      this.selectedProduct = res.data;
    });

    this.actionSubscription = this.store.showAction.subscribe((res: any) => {
      this.store.setValue('selected_product', res);
      this.selectedProduct = res;
      this.router.navigate(['consultant', 'follow-up']);
    });

    this.filterObj = {
      'stakeHolders.consultant': this.authentication.getUserInfo()._id
    };
  }

}
