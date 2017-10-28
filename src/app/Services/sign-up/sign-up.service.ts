import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { User } from '../../Models/user';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class SignUpService {

  //private urlget : string = "http://192.168.99.103:3000/users";
  private urlpost : string = "http://localhost:3000/users";
  
    headers: Headers;
    options: RequestOptions;
  
    constructor(private http: Http) {
      this.headers = new Headers({ 'Content-Type': 'application/json' });
      this.options = new RequestOptions({ headers: this.headers }); 
    }

    setUser(user: User): Observable<User> {
      return this.http.post(this.urlpost, JSON.stringify(user), this.options).map(response => response.json())
    }

}
