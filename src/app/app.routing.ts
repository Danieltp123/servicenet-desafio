import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { RegisterUserComponent } from './register-user/register-user.component';

import { LoginComponent } from './login/login.component';

const ROUTES: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'register', component: RegisterUserComponent},
  { path: 'login', component: LoginComponent},
  { path: '**', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(ROUTES);
