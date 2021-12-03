import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { MatCheckboxModule } from '@angular/material/checkbox';

import { CustomerRoutingModule } from './customer-routing.module';


import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { HomepageComponent } from './homepage/homepage.component';
import { FaqComponent } from './faq/faq.component';
import { FooterComponent } from './footer/footer.component';
import { ProgramDetailComponent } from './program-detail/program-detail.component';
import { RechargeAccountComponent } from './recharge-account/recharge-account.component';


@NgModule({
  declarations: [CustomerModule,
    HeaderComponent,
    LoginComponent,
    RegistrationComponent,
    HomepageComponent,
    FaqComponent,
    FooterComponent,
    ProgramDetailComponent,
    RechargeAccountComponent,
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    MatCheckboxModule,
    MatNativeDateModule,
    MatInputModule,
    MatDatepickerModule,
    CustomerRoutingModule
  ]
})
export class CustomerModule { }
