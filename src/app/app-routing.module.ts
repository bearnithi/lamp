import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AuthenticationComponent } from './pages/authentication/authentication.component';


const routes: Routes = [{
  path: '',
  component: HomeComponent
}, {
  path: 'authentication/:type',
  component: AuthenticationComponent
}, {
  path: 'lender',
  loadChildren: () => import('./lender/lender.module').then((mod) => mod.LenderModule)
}, {
  path: 'admin',
  loadChildren: () => import('./admin/admin.module').then((mod) => mod.AdminModule)
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
