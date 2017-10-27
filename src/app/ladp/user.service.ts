import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable }           from 'rxjs/Observable';

@Injectable()
export class UserService {
  private loggedIn = false;
  redirectUrl: string;

  constructor(private http: Http) {
    this.loggedIn = !!localStorage.getItem('auth_token');
  }

  login(email, password) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    return this.http
      .post(
        'http://192.168.99.102:3000/ldap', 
        JSON.stringify({ email, password }), 
        { headers }
      )
      .map(res => res.json())
      .map((res) => {
        if (res.userValid) {
          localStorage.setItem('auth_token', res.auth_token);
          this.loggedIn = true;
        }

        return res.userValid;
      });
  }
  
  logOut() {
    localStorage.removeItem('auth_token');
    this.loggedIn = false;
  }

  isLoggedIn() {
    return true;
  }
}