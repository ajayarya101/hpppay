import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
// import { FontAwesomeModule, FaIconLibrary  } from '@fortawesome/angular-fontawesome';


import { AppRoutingModule } from './app-routing.module';
import { CustomerRoutingModule } from './customer/customer-routing.module'
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { HeaderComponent } from './customer/header/header.component';
import { FooterComponent } from './customer/footer/footer.component';
import { HomepageComponent } from './customer/homepage/homepage.component';
import { LoginComponent } from './customer/login/login.component';
import { RegistrationComponent } from './customer/registration/registration.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ProgramDetailComponent } from './customer/program-detail/program-detail.component';
import { RechargeAccountComponent } from './customer/recharge-account/recharge-account.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    HomepageComponent,
    RegistrationComponent,
    PagenotfoundComponent,
    ProgramDetailComponent,
    RechargeAccountComponent
  ],
  imports: [
    BrowserModule,
    // FontAwesomeModule,
    // FaIconLibrary,
    AppRoutingModule,
    CustomerRoutingModule,
    MatCheckboxModule,
    MatNativeDateModule,
    MatInputModule,
    MatDatepickerModule,
    BrowserAnimationsModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
