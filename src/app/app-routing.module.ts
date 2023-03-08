import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AhcComponent } from './components/ahc/ahc.component';
import { AssbuiltComponent } from './components/assbuilt/assbuilt.component';



const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent},
  { path: 'te-health', component: AhcComponent },
  { path: 'as-built', component: AssbuiltComponent },
];

/*, 
  { path: '**', redirectTo: '/layout', pathMatch: 'full' }
  */


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
