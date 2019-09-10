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
import { ProductDetailsPageComponent } from './products/product-details-page/product-details-page.component';
import { FollowUpComponent } from './products/follow-up/follow-up.component';

@NgModule({
  declarations: [BuyerMainComponent, BuyerDashboardComponent, ProductListBuyerComponent, MyProfileComponent, ContactComponent, ProductDetailsPageComponent, FollowUpComponent],
  imports: [
    CommonModule,
    CoreModule,
    SharedModule,
    ReactiveFormsModule,
    BuyerRoutingModule
  ]
})
export class BuyerModule { }
