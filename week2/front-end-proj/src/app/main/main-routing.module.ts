import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { UpdateInfoComponent } from './update-info/update-info.component';
import { MainGuard } from '../main.guard';

const routes: Routes = [
  {path:'dashboard', component:DashboardComponent,canActivate:[MainGuard] ,},
  { path:'profile/:id',component:ProfileComponent,canActivate:[MainGuard] ,},
  { path:'updateInfo/:id',component:UpdateInfoComponent,canActivate:[MainGuard] ,},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
