import { Component, OnInit } from '@angular/core';
import { AuthService }  from './authentication/auth.service'

import { Angular2TokenService } from 'angular2-token';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app works!';


  constructor(private _tokenService: Angular2TokenService,
    private authService: AuthService
              )

              {
    this._tokenService.init({ apiPath : "http://192.168.99.102:3000"});
  }

  ngOnInit() {
    console.log(this.isLoggedIn());
   }

  isLoggedIn(): boolean {
    return this.authService.isLoggedIn();
  }
  getStyle() {
    if(!this.isLoggedIn()) {
      return "100%";
    } else {
      return "";
    }
  }

  onResize(event) {
    console.log(event.target.innerWidth);
    alert("dfsd")
   }

}
