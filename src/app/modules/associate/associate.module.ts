import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AssociateMainComponent } from './associate-main/associate-main.component';
import { AssociateDashboardComponent } from './associate-dashboard/associate-dashboard.component';
import { AssociateMyProfileComponent } from './associate-my-profile/associate-my-profile.component';
import { CoreModule } from '../../core/core.module';
import { SharedModule } from '../../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AssociateRoutingModule } from './associate.routing';
import { BuyersInterestsComponent } from './buyers-interests/buyers-interests.component';
import { AssociateProductsComponent } from './associate-products/associate-products.component';
import { AssociateFollowUpComponent } from './associate-follow-up/associate-follow-up.component';
import { AssociateProductDetailsComponent } from './associate-product-details/associate-product-details.component';



@NgModule({
  declarations: [AssociateMainComponent, AssociateDashboardComponent, AssociateMyProfileComponent, BuyersInterestsComponent, AssociateProductsComponent, AssociateFollowUpComponent, AssociateProductDetailsComponent],
  imports: [
    CommonModule,
    CoreModule,
    SharedModule,
    ReactiveFormsModule,
    AssociateRoutingModule
  ]
})
export class AssociateModule { }
