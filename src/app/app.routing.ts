import {ModuleWithProviders} from '@angular/core';
import { Routes, RouterModule, ROUTES} from '@angular/router'

import { AppComponent } from './app.component';
import { PrincipalComponent } from './pages/principal/principal.component';
import { LoginComponent } from './login/login/login.component';
import { LoginAuthGuard } from './services/login-auth.guard';

//array de objetos tipo Routes
const appRouter : Routes = [
    { path:'', component: AppComponent},  
    { path:'principal', component: PrincipalComponent,canActivate:[LoginAuthGuard]}, 
    { path:'login', component: LoginComponent},
    { path:'**', component: AppComponent }
];

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRouter);