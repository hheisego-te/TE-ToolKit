import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginService } from './services/login.service'; //este es el service
import { AccountgroupsService } from './services/accountgroups.service'; // otro service
import { HttpClientModule } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service'; 
import { OrderModule } from 'ngx-order-pipe';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { LayoutComponent } from './components/layout/layout.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AccountgroupsComponent } from './components/accountgroups/accountgroups.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LayoutComponent,
    NavbarComponent,
    LoginFormComponent,
    DashboardComponent,
    AccountgroupsComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    OrderModule    
  ],
  providers: [LoginService, 
              CookieService, 
              AccountgroupsService],
              
  bootstrap: [AppComponent]
})
export class AppModule { }
