import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminMainComponent } from './admin-main/admin-main.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { CoreModule } from '../core/core.module';
import { SharedModule } from '../shared/shared.module';
import { AdminRoutingModule } from './admin.routing';
import { LenderMasterComponent } from './masters/lender-master/lender-master.component';
import { AssociateMasterComponent } from './masters/associate-master/associate-master.component';
import { ConsultantMasterComponent } from './masters/consultant-master/consultant-master.component';
import { AuctionMasterComponent } from './masters/auction-master/auction-master.component';
import { AddAssociteComponent } from './masters/associate-master/add-associte/add-associte.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AddLenderComponent } from './masters/lender-master/add-lender/add-lender.component';
import { AddConsultantComponent } from './masters/consultant-master/add-consultant/add-consultant.component';



@NgModule({
  declarations: [AdminMainComponent,
    AdminDashboardComponent,
    LenderMasterComponent,
    AssociateMasterComponent,
    ConsultantMasterComponent,
    AuctionMasterComponent,
    AddAssociteComponent,
    AddLenderComponent,
    AddConsultantComponent],
  imports: [
    CommonModule,
    CoreModule,
    SharedModule,
    ReactiveFormsModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
