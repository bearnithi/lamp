import { RouterModule, Routes} from '@angular/router';
import { NgModule } from '@angular/core';
import { LenderDashboardComponent } from './lender-dashboard/lender-dashboard.component';
import { LenderMainComponent } from './lender-main/lender-main.component';

const LENDER_ROUTES = [{
  path: '',
  component: LenderMainComponent,
  children: [{
    path: 'lender-dashboard',
    component: LenderDashboardComponent
  }]
}];

@NgModule({
  imports: [RouterModule.forChild(LENDER_ROUTES)],
  exports: [RouterModule]
})

export class LenderRoutingModule {}
