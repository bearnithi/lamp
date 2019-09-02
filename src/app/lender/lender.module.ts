import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LenderRoutingModule } from './lender.routing';
import { LenderDashboardComponent } from './lender-dashboard/lender-dashboard.component';
import { LenderMainComponent } from './lender-main/lender-main.component';
import { SharedModule } from '../shared/shared.module';
import { CoreModule } from '../core/core.module';

@NgModule({
  declarations: [LenderDashboardComponent, LenderMainComponent],
  imports: [
    CommonModule,
    CoreModule,
    SharedModule,
    LenderRoutingModule
  ]
})
export class LenderModule { }
