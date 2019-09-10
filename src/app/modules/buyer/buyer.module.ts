import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuyerMainComponent } from './buyer-main/buyer-main.component';
import { BuyerDashboardComponent } from './buyer-dashboard/buyer-dashboard.component';
import { CoreModule } from '../../core/core.module';
import { SharedModule } from '../../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductListBuyerComponent } from './products/product-list-buyer/product-list-buyer.component';
import { BuyerRoutingModule } from './buyer.routing';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [BuyerMainComponent, BuyerDashboardComponent, ProductListBuyerComponent, MyProfileComponent, ContactComponent],
  imports: [
    CommonModule,
    CoreModule,
    SharedModule,
    ReactiveFormsModule,
    BuyerRoutingModule
  ]
})
export class BuyerModule { }
