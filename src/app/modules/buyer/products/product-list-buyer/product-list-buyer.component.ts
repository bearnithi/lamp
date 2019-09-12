import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StoreService } from 'src/app/services/store.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-product-list-buyer',
  templateUrl: './product-list-buyer.component.html',
  styleUrls: ['./product-list-buyer.component.scss']
})
export class ProductListBuyerComponent implements OnInit {
  filterObj: any = {};
  selectedProduct: any = {};

  productdetailssubscribtion: Subscription;
  actionSubscription: Subscription;
  activitySubscription: Subscription;

  showActivity: boolean;

  constructor(private router: Router, private store: StoreService) { }

  ngOnInit() {
    this.productdetailssubscribtion = this.store.showproductdetails.subscribe((res) => {
      this.store.setValue('Selected_Product', res);
      this.router.navigate(['buyer', 'product-details']);
    });

    this.actionSubscription = this.store.showAction.subscribe((res: any) => {
      this.store.setValue('selected_product', res);
      this.router.navigate(['buyer','follow-up']);
    });

    this.activitySubscription = this.store.showActivity.subscribe((res: any) => {
      this.showActivity = res.show || false;
      this.selectedProduct = res.data;
    });

  }

  ngOnDestroy(): void {
    this.productdetailssubscribtion.unsubscribe();
  }

}
