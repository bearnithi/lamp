import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { BuyerDashboardComponent } from './buyer-dashboard/buyer-dashboard.component';
import { BuyerMainComponent } from './buyer-main/buyer-main.component';
import { ProductListBuyerComponent } from './products/product-list-buyer/product-list-buyer.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { ContactComponent } from './contact/contact.component';
import { ProductDetailsPageComponent } from './products/product-details-page/product-details-page.component';
import { FollowUpComponent } from './products/follow-up/follow-up.component';


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
  }, {
    path: 'contact',
    component: ContactComponent
  }, {
    path: 'product-details',
    component: ProductDetailsPageComponent
  }, {
    path: 'follow-up',
    component: FollowUpComponent
  }]
}];

@NgModule({
  imports: [RouterModule.forChild(BUYER_ROUTES)],
  exports: [RouterModule]
})

export class BuyerRoutingModule { }
