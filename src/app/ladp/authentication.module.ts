import { NgModule }                         from '@angular/core';
import { CommonModule }                     from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AuthenticationRoutingModule } from './authentication-routing.module';
import { SharedModule }                from '../shared/shared.module';

import { LoginComponent }  from './login.component';
import { LoggedInGuard }  from './logged-in-guard.service';

//import { SignUpComponent } from './sign-up/sign-up.component';
//import { OauthCallbackComponent }  from './oauth-callback.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AuthenticationRoutingModule,
    SharedModule
  ],
  declarations: [
    LoginComponent,

//    SignUpComponent,
 //   OauthCallbackComponent
  ],
  providers: [    LoggedInGuard]
})
export class AuthenticationModule2 {}
