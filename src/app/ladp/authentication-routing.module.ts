import { NgModule }       from '@angular/core';
import { RouterModule, Routes }   from '@angular/router';

//import { LoggedInGuard }  from './logged-in-guard.service';
//import { LoggedOutGuard } from './logged-out-guard.service';
import { UserService }    from './user.service';

import { LoginComponent }          from './login.component';
import { SignUpComponent }         from './sign-up/sign-up.component';
//import { OauthCallbackComponent }  from './oauth-callback.component';

const routes: Routes = [
] 

@NgModule({
  imports: [
    RouterModule.forChild([

    ])
  ],
  exports: [
    RouterModule
  ],
  providers: [
    UserService
    // LoggedInGuard,
    // AuthService,
    // LoggedOutGuard
  ]
})
export class AuthenticationRoutingModule {}
