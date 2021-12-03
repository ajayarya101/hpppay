import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './customer/login/login.component';
import { RegistrationComponent } from './customer/registration/registration.component';
import { HomepageComponent } from './customer/homepage/homepage.component';
import { FaqComponent } from './customer/faq/faq.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ProgramDetailComponent } from './customer/program-detail/program-detail.component';
import { RechargeAccountComponent } from './customer/recharge-account/recharge-account.component';

const routes: Routes = [
  {
    path: '',  component: HomepageComponent
  },
  {
    path:'home', component: HomepageComponent
  },  {
    path:'login', component: LoginComponent
  }, 
  {
    path:'registration', component: RegistrationComponent
  }, 
  {
    path:'faq', component: FaqComponent
  }, 
  {
    path:'programDetail', component: ProgramDetailComponent
  }, 
  {
    path:'recharge', component: RechargeAccountComponent
  },  
  {
    path: '**', component: PagenotfoundComponent 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
