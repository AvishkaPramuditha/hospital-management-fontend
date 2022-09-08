import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewPatientsComponent } from './patient/view-patients/view-patients.component';
import { AddPatientComponent } from './patient/add-patient/add-patient.component';
import { UpdatePatientComponent } from './patient/update-patient/update-patient.component';
import { PatientComponent } from './patient/patient.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomeComponent } from './home/home.component';
import { DeletePatientComponent } from './patient/delete-patient/delete-patient.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { UserComponent } from './user/user.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from "@angular/material/icon";

@NgModule({
  declarations: [
    AppComponent,
    ViewPatientsComponent,
    AddPatientComponent,
    UpdatePatientComponent,
    PatientComponent,
    AboutUsComponent,
    ContactUsComponent,
    HomeComponent,
    DeletePatientComponent,
    LoginComponent,
    SignUpComponent,
    UserComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
