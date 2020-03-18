import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import{HomeComponent} from './home/home.component';
import {TeamComponent} from './team/team.component';
import {ContactComponent} from './contact/contact.component';
import {AboutComponent} from './about/about.component';
const routes: Routes = [
  {path : '', component : HomeComponent},
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  {path : 'home', component :HomeComponent},
  {path : 'team', component : TeamComponent},
  {path : 'contact', component : ContactComponent},
  {path : 'about', component : AboutComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
