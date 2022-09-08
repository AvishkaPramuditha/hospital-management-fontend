import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomeComponent } from './home/home.component';
import { AddPatientComponent } from './patient/add-patient/add-patient.component';
import { DeletePatientComponent } from './patient/delete-patient/delete-patient.component';
import { PatientComponent } from './patient/patient.component';
import { UpdatePatientComponent } from './patient/update-patient/update-patient.component';
import { ViewPatientsComponent } from './patient/view-patients/view-patients.component';
import {LoginComponent} from "./login/login.component";
import {SignUpComponent} from "./sign-up/sign-up.component";
import {DashboardComponent} from "./dashboard/dashboard.component";

const routes: Routes = [
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'sign-up',component:SignUpComponent},
  {path:'dashboard',component:DashboardComponent,children:[
      {path:'',redirectTo:'home',pathMatch:'full'},
      {path:'home',component:HomeComponent},
      {path: 'about-us', component: AboutUsComponent},
      {path: 'contact-us', component: ContactUsComponent},
      {path: 'patient', component: PatientComponent,
        children: [
          {path:'',redirectTo:'add-patient',pathMatch:'full'},
          {path: 'add-patient', component: AddPatientComponent},
          {path: 'view-patients', component: ViewPatientsComponent},
          {path: 'update/:id', component: UpdatePatientComponent},
          {path: 'delete/:id', component: DeletePatientComponent},
    ]}]}];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
