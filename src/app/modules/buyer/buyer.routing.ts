import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { BuyerDashboardComponent } from './buyer-dashboard/buyer-dashboard.component';
import { BuyerMainComponent } from './buyer-main/buyer-main.component';
import { ProductListBuyerComponent } from './products/product-list-buyer/product-list-buyer.component';
import { MyProfileComponent } from './my-profile/my-profile.component';


const BUYER_ROUTES = [{
  path: '',
  component: BuyerMainComponent,
  children: [{
    path: 'buyer-dashboard',
    component: BuyerDashboardComponent,
  }, {
    path: 'products',
    component: ProductListBuyerComponent
  }, {
    path: 'my-profile',
    component: MyProfileComponent
  }]
}];

@NgModule({
  imports: [RouterModule.forChild(BUYER_ROUTES)],
  exports: [RouterModule]
})

export class BuyerRoutingModule { }
