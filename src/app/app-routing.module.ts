import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoggedInGuard } from './authentication/logged-in-guard.service';
import { LoginComponent }          from './authentication/login/login.component';
import { SignUpComponent }         from './authentication/sign-up/sign-up.component';

const routes: Routes = [
  { path: 'log-in', component: LoginComponent },
  { path: 'login', redirectTo: '/log-in' },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'signup', redirectTo: '/sign-up' }
] 

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {
  
}


