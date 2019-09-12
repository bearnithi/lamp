import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { ConsultantDashboardComponent } from "./consultant-dashboard/consultant-dashboard.component";
import { ConsultantMainComponent } from "./consultant-main/consultant-main.component";
import { ConsultantMyProfileComponent } from "./consultant-my-profile/consultant-my-profile.component";
import { ConsultantProductsComponent } from './consultant-products/consultant-products.component';
import { ConsultantFollowUpComponent } from './consultant-follow-up/consultant-follow-up.component';
import { ConsultantProductDetailComponent } from './consultant-product-detail/consultant-product-detail.component';

const CONSULTANT_ROUTES = [
  {
    path: "",
    component: ConsultantMainComponent,
    children: [
      {
        path: "consultant-dashboard",
        component: ConsultantDashboardComponent
      },
      {
        path: "my-profile",
        component: ConsultantMyProfileComponent
      },
      {
          path: 'products',
          component: ConsultantProductsComponent
      },
      {
        path: 'follow-up',
        component: ConsultantFollowUpComponent
      },
      {
        path: 'product-details',
        component: ConsultantProductDetailComponent
      },
      {
        path: "",
        component: ConsultantDashboardComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(CONSULTANT_ROUTES)],
  exports: [RouterModule]
})
export class ConsultantRoutingModule {}
