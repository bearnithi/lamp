import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';


const routes: Routes = [{
  path: '',
  component: HomeComponent
}, {
  path: 'lender',
  loadChildren: () => import('./lender/lender.module').then((mod) => mod.LenderModule)
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
