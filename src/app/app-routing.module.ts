import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './dashboard-2/home/home.component';
import { DashboardHomeComponent } from './dashboard/dashboard-home/dashboard-home.component';


const routes: Routes = [
  { path: '', redirectTo: 'dashboard_home', pathMatch: 'full' },
  { path: 'dashboard_home', component: HomeComponent },
  { path: 'dashboard', component: DashboardHomeComponent },


];


@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }