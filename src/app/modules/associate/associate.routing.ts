import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { AssociateDashboardComponent } from './associate-dashboard/associate-dashboard.component';
import { AssociateMyProfileComponent } from './associate-my-profile/associate-my-profile.component';
import { AssociateMainComponent } from './associate-main/associate-main.component';
import { BuyersInterestsComponent } from './buyers-interests/buyers-interests.component';
import { AssociateProductsComponent } from './associate-products/associate-products.component';
import { AssociateFollowUpComponent } from './associate-follow-up/associate-follow-up.component';
import { AssociateProductDetailsComponent } from './associate-product-details/associate-product-details.component';


const ASSOCIATE_ROUTES = [{
  path: '',
  component: AssociateMainComponent,
  children: [{
    path: 'associate-dashboard',
    component: AssociateDashboardComponent,
  }, {
    path: 'my-profile',
    component: AssociateMyProfileComponent
  }, {
    path: 'buyers-interests',
    component: BuyersInterestsComponent
  }, {
    path: 'products',
    component: AssociateProductsComponent
  },
  {
    path: 'follow-up',
    component: AssociateFollowUpComponent
  },
  // {
  //   path: 'product-details',
  //   component: AssociateProductDetailsComponent
  // },
  {
    path: "",
    component: AssociateDashboardComponent
  }]
}];

@NgModule({
  imports: [RouterModule.forChild(ASSOCIATE_ROUTES)],
  exports: [RouterModule]
})

export class AssociateRoutingModule { }
