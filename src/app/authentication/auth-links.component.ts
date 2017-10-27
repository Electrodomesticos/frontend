import { Component } from '@angular/core';

import { UserService } from '../ladp/user.service';

import {
  Router
}                           from '@angular/router';

@Component({
  selector: 'app-auth-links',
  template: `
  <div class="ui form"  style="margin-left: 81%; margin-top:14px; position:absolute; z-index:1;">
    <div class="fields">
      <div class="field">
       
         <button routerLink="/log-in" routerLinkActive="active" *ngIf="isLoggedOut()" class="btn btn-outline-success my-2 my-sm-0" type="submit">Log In</button>
        <button routerLink="/sign-up" routerLinkActive="active" *ngIf="isLoggedOut()" class="btn btn-outline-success my-2 my-sm-0" type="submit">Sign Up</button>
      </div>
      <div class="field" > 
        <button (click)="logOut()" *ngIf="isLoggedIn()" class="btn btn-outline-success my-2 my-sm-0" type="submit">Log Out</button>   
      </div>
    </div>
  </div>
  `
})
export class AuthLinksComponent {
  constructor(private authService: UserService, private router : Router) {}

  isLoggedIn(): boolean {
    return this.authService.isLoggedIn();
  }

  isLoggedOut(): boolean {
    return !this.authService.isLoggedIn();
  }

  logOut(): void {
    
    this.authService.logOut();
    this.router.navigate(['/']);
  }
}
