import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminMainComponent } from './admin-main/admin-main.component';
import { AssociateMasterComponent } from './masters/associate-master/associate-master.component';
import { LenderMasterComponent } from './masters/lender-master/lender-master.component';
import { ConsultantMasterComponent } from './masters/consultant-master/consultant-master.component';

const ADMIN_ROUTES = [{
  path: '',
  component: AdminMainComponent,
  children: [{
    path: 'admin-dashboard',
    component: AdminDashboardComponent,
  },
  {
    path: 'associate',
    component: AssociateMasterComponent
  }, {
    path: 'lender',
    component: LenderMasterComponent
  }, {
    path: 'consultant',
    component: ConsultantMasterComponent
  }]
}];

@NgModule({
  imports: [RouterModule.forChild(ADMIN_ROUTES)],
  exports: [RouterModule]
})

export class AdminRoutingModule { }
