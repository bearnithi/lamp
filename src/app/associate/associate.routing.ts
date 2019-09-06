import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { AssociateDashboardComponent } from './associate-dashboard/associate-dashboard.component';
import { AssociateMyProfileComponent } from './associate-my-profile/associate-my-profile.component';
import { AssociateMainComponent } from './associate-main/associate-main.component';
import { BuyersInterestsComponent } from './buyers-interests/buyers-interests.component';


const ASSOCIATE_ROUTES = [{
  path: '',
  component: AssociateMainComponent,
  children: [{
    path: 'associate-dashboard',
    component: AssociateDashboardComponent,
  }, {
    path: 'my-profile',
    component: AssociateMyProfileComponent
  }, {
    path: 'buyers-interests',
    component: BuyersInterestsComponent
  }]
}];

@NgModule({
  imports: [RouterModule.forChild(ASSOCIATE_ROUTES)],
  exports: [RouterModule]
})

export class AssociateRoutingModule { }
