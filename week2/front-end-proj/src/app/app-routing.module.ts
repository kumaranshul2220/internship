import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'', redirectTo:'auth' , pathMatch:'full'},
  {path:"auth", loadChildren:()=>import('./auth/auth.module').then(mod=>mod.AuthModule)},
  {path:"main", loadChildren:()=>import('./main/main.module').then(mod=>mod.MainModule)},
  //{ path:"**", component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
