import { RouterModule, Routes} from '@angular/router';
import { NgModule } from '@angular/core';
import { LenderDashboardComponent } from './lender-dashboard/lender-dashboard.component';
import { LenderMainComponent } from './lender-main/lender-main.component';
import { ProductListLenderComponent } from './products/product-list-lender/product-list-lender.component';
import { AddProductLenderComponent } from './products/add-product-lender/add-product-lender.component';
import { MyProfileComponent } from './my-profile/my-profile.component';

const LENDER_ROUTES = [{
  path: '',
  component: LenderMainComponent,
  children: [{
    path: 'lender-dashboard',
    component: LenderDashboardComponent
  }, {
    path: 'products',
    component: ProductListLenderComponent
  }, {
    path: 'products/:id',
    component: ProductListLenderComponent
  }, {
    path: 'add-product',
    component: AddProductLenderComponent
  },  {
    path: 'add-product/:id',
    component: AddProductLenderComponent
  }, {
    path: 'my-profile',
    component: MyProfileComponent
  }]
}];

@NgModule({
  imports: [RouterModule.forChild(LENDER_ROUTES)],
  exports: [RouterModule]
})

export class LenderRoutingModule {}
