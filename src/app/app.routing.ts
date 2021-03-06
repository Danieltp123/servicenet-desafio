import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';

import { LoginComponent } from './login/login.component';
import { CrudComponent } from './crud/crud.component';
import { CreateComponent } from './create/create.component';
import { ReadComponent } from './read/read.component';



const ROUTES: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'crud', component: CrudComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'login', component: LoginComponent},
  { path: 'read', component: ReadComponent},
  { path: 'create', component: CreateComponent},
  { path: '**', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  
];

export const routing: ModuleWithProviders = RouterModule.forRoot(ROUTES);
