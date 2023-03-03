import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AhcComponent } from './components/ahc/ahc.component';



const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent},
  { path: 'te-health', component: AhcComponent },
];

/*, 
  { path: '**', redirectTo: '/layout', pathMatch: 'full' }
  */


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
