import { Component } from '@angular/core';
import { AuthService }  from './authentication/auth.service'

declare var $:any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent{

  constructor(private authService: AuthService) {}
  

  isLoggedIn(): boolean {
    return this.authService.isLoggedIn();
  }




}
