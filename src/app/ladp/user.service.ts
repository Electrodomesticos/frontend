import { Injectable, OnInit } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable }           from 'rxjs/Observable';
import { environment } from '../../environments/environment'  


@Injectable()
export class UserService {
  private loggedIn = false;
  redirectUrl: string;
  private currentUser : any;
  private urlget : string;
  private percentage : Number;
  
  //Para probar localmente descomentar las direcciones del Dock Duh!!
  

  private urlSearch = environment.apipath+"/users/search/"; 
  //private urlSearch : string; 
  //private urlLdap = environment.apipath+"/ldap";
  private urlLdap : string;


  constructor(private http: Http) {
    this.loggedIn = !!localStorage.getItem('auth_token');

    if (environment.apipath == "http://localhost:3000"){
        this.urlLdap = environment.apipath+"/test"
    }
    else {
      //this.urlLdap = environment.apipath+"/ldap"
      this.urlLdap = environment.apipath+"/test"
    } 
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

  ngOnInit(){
    alert('dsada')

  }

  lookForPercentage(){

    this.urlget = environment.apipath+"/users/"+this.getUser().id+"/percent";
    
      return this.http.get(this.urlget).map((response: Response) => this.percentage = response.json());

  }

  getPercentage(){

    return this.percentage;

  }

}
