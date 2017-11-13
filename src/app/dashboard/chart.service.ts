import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import { UserService } from '../ladp/user.service';
import { environment } from '../../environments/environment'  


@Injectable()
export class ChartService {

  //private urlget: string = "https://hidden-shore-15479.herokuapp.com/api/v1/areas.json";
  //private urlpost: string = "https://hidden-shore-15479.herokuapp.com/api/v1/areas"


  private urlget : string = environment.apipath+"/users/"+this.userService.getUser().id+"/current_consumption";

  headers: Headers;
  options: RequestOptions;

  constructor(private http: Http, private userService : UserService) {
    this.headers = new Headers({ 'Content-Type': 'application/json' });
    this.options = new RequestOptions({ headers: this.headers });
  }
  
  getData()  {
    this.urlget = environment.apipath+"/users/"+this.userService.getUser().id+"/current_consumption";
  
    return this.http.get(this.urlget).map((response: Response) => response.json());


  }

 

  


}