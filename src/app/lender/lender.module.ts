import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LenderRoutingModule } from './lender.routing';
import { LenderDashboardComponent } from './lender-dashboard/lender-dashboard.component';
import { LenderMainComponent } from './lender-main/lender-main.component';
import { SharedModule } from '../shared/shared.module';
import { CoreModule } from '../core/core.module';
import { ProductListLenderComponent } from './products/product-list-lender/product-list-lender.component';
import { AddProductLenderComponent } from './products/add-product-lender/add-product-lender.component';
import { MyProfileComponent } from './my-profile/my-profile.component';

@NgModule({
  declarations: [LenderDashboardComponent, LenderMainComponent, ProductListLenderComponent, AddProductLenderComponent, MyProfileComponent],
  imports: [
    CommonModule,
    CoreModule,
    SharedModule,
    LenderRoutingModule
  ]
})
export class LenderModule { }
