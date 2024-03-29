import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminMainComponent } from './admin-main/admin-main.component';
import { AssociateMasterComponent } from './masters/associate-master/associate-master.component';
import { LenderMasterComponent } from './masters/lender-master/lender-master.component';
import { ConsultantMasterComponent } from './masters/consultant-master/consultant-master.component';
import { AddAssociteComponent } from './masters/associate-master/add-associte/add-associte.component';
import { AddLenderComponent } from './masters/lender-master/add-lender/add-lender.component';
import { AddConsultantComponent } from './masters/consultant-master/add-consultant/add-consultant.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { AddProductComponent } from './products/add-product/add-product.component';
import { AuctionMasterComponent } from './masters/auction-master/auction-master.component';
import { AddAuctionComponent } from './masters/auction-master/add-auction/add-auction.component';
import { ProductDetailsPageComponent } from './products/product-details-page/product-details-page.component';
import { AdminProfileComponent } from './admin-profile/admin-profile.component';

const ADMIN_ROUTES = [{
  path: '',
  component: AdminMainComponent,
  children: [{
    path: 'admin-dashboard',
    component: AdminDashboardComponent,
  },
  {
    path: 'associate',
    component: AssociateMasterComponent,
  },
  {
    path: 'add-associate/:type',
    component: AddAssociteComponent
  },
  {
    path: 'add-associate',
    component: AddAssociteComponent
  },
  {
    path: 'lender',
    component: LenderMasterComponent
  }, {
    path: 'add-lender/:type',
    component: AddLenderComponent
  },{
    path: 'add-lender',
    component: AddLenderComponent
  },{
    path: 'consultant',
    component: ConsultantMasterComponent
  }, {
    path: 'add-consultant/:type',
    component: AddConsultantComponent
  },{
    path: 'add-consultant',
    component: AddConsultantComponent
  },{
    path: 'products/:id',
    component: ProductListComponent
  },{
    path: 'products',
    component: ProductListComponent
  }, {
    path: 'add-product/:type',
    component: AddProductComponent
  }, {
    path: 'add-product',
    component: AddProductComponent
  }, {
    path: 'auctions',
    component: AuctionMasterComponent
  }, {
    path: 'add-auction',
    component: AddAuctionComponent
  }, {
    path: 'add-auction/:type',
    component: AddAuctionComponent
  },
  // {
  //   path: 'product-details',
  //   component: ProductDetailsPageComponent
  // },
  {
    path: 'my-profile',
    component: AdminProfileComponent
  }
]
}];

@NgModule({
  imports: [RouterModule.forChild(ADMIN_ROUTES)],
  exports: [RouterModule]
})

export class AdminRoutingModule { }
