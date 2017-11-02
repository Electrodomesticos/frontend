import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable }           from 'rxjs/Observable';



@Injectable()
export class UserService {
  private loggedIn = false;
  redirectUrl: string;
  private currentUser : any;
  
  //Para probar localmente descomentar las direcciones del Dock Duh!!
  //private urlSearch = "http://192.168.99.102:3000/users/search/"; 
  private urlSearch = "http://localhost:3000/users/search/"; 
  //private urlLdap = "http://192.168.99.102:3000/ldap";
  private urlLdap = "http://localhost:3000/test";


  constructor(private http: Http) {
    this.loggedIn = !!localStorage.getItem('auth_token');
  }

  login(email, password) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    return this.http
      .post(
        this.urlLdap, 
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


  lookForUser(user){

    return this.http.get(this.urlSearch+user).map((response ) =>{ 
      localStorage.setItem('userId', JSON.stringify(response.json()[0]))

      });

  }
  
  logOut() {
    localStorage.removeItem('auth_token');
    localStorage.removeItem('userId');
    this.loggedIn = false;
  }

  isLoggedIn() {
    return this.loggedIn;
  }

  getUser(){
    this.currentUser = JSON.parse(localStorage.getItem('userId'));
    return this.currentUser;
  }

}
