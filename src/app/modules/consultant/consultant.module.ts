import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConsultantMainComponent } from './consultant-main/consultant-main.component';
import { ConsultantDashboardComponent } from './consultant-dashboard/consultant-dashboard.component';
import { ConsultantMyProfileComponent } from './consultant-my-profile/consultant-my-profile.component';
import { ConsultantRoutingModule } from './consultant.routing';
import { CoreModule } from 'src/app/core/core.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ConsultantProductsComponent } from './consultant-products/consultant-products.component';



@NgModule({
  declarations: [ConsultantMainComponent, ConsultantDashboardComponent, ConsultantMyProfileComponent, ConsultantProductsComponent],
  imports: [
    CommonModule,
    CoreModule,
    SharedModule,
    ReactiveFormsModule,
    ConsultantRoutingModule
  ]
})
export class ConsultantModule { }
