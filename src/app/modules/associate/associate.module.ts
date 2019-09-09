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



@NgModule({
  declarations: [AssociateMainComponent, AssociateDashboardComponent, AssociateMyProfileComponent, BuyersInterestsComponent],
  imports: [
    CommonModule,
    CoreModule,
    SharedModule,
    ReactiveFormsModule,
    AssociateRoutingModule
  ]
})
export class AssociateModule { }
