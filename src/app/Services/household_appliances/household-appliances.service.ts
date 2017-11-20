import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Household_appliance } from '../../Models/household_appliance';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import { UserService } from '../../ladp/user.service';
import { environment } from '../../../environments/environment';


@Injectable()
export class HouseholdAppliancesService {
  private urlget : string = environment.apipath+"/household_appliances";
  //private urlget : string = "http://localhost:3000/household_appliances";
  private urlgetUser : string;

    headers: Headers;
    options: RequestOptions;
  
    constructor(private http: Http, private userService: UserService) {
      this.headers = new Headers({ 'Content-Type': 'application/json' });
      this.options = new RequestOptions({ headers: this.headers });

      this.urlgetUser = environment.apipath+"/users/"+this.userService.getUser().id+"/household_appliances";
      //this.urlgetUser = "http://localhost:3000/users/"+this.userService.getUser().id+"/household_appliances";
    }

    getAppliances(): Observable<Household_appliance[]> {
      this.urlgetUser = environment.apipath+"/users/"+this.userService.getUser().id+"/household_appliances";
      return this.http
          .get(this.urlgetUser)
          .map((response: Response) => {
              return <Household_appliance[]>response.json();
          })
          .catch(this.handleError);
  }
  
  getAppliancesA(): Observable<Household_appliance[]> {
    this.urlgetUser = environment.apipath+"/users/"+this.userService.getUser().id+"/available";
    return this.http
        .get(this.urlgetUser)
        .map((response: Response) => {
            return <Household_appliance[]>response.json();
        })
        .catch(this.handleError);
}

getAppliancesB(): Observable<Household_appliance[]> {
  this.urlgetUser = environment.apipath+"/users/"+this.userService.getUser().id+"/nocat";
  return this.http
      .get(this.urlgetUser)
      .map((response: Response) => {
          return <Household_appliance[]>response.json();
      })
      .catch(this.handleError);
}
  
  setAppliance(appliance: Household_appliance): Observable<Household_appliance> {
    appliance.user_id = this.userService.getUser().id;
    return this.http.post(this.urlget, JSON.stringify(appliance), this.options).map(response => response.json())
  }
  
  updateAppliance(appliance): Observable<Household_appliance> {
    const url = `${this.urlget}/${appliance.id}`;
    console.log(url)
    return this.http.put(url, JSON.stringify(appliance), 
      this.options).map((res: Response) => res.json())
      .catch(this.handleError);
  }
  
  deleteAppliance(id: number): Observable<Household_appliance> {
    const url = `${this.urlget}/${id}`;
    console.log(url)
    return this.http.delete(url, this.options)
    .map(this.extractData)
    .catch(this.handleError);         
  }
  
  private handleError(error: Response) {
      return Observable.throw(error.statusText);
  }
  
  private extractData(res: Response) {
    let body = res.json();
    return body || {};
  }
  




}
