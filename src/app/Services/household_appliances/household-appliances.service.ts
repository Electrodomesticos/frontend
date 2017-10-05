import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Household_appliance } from '../../Models/household_appliance';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class HouseholdAppliancesService {
  private urlget : string = "http://localhost:3000/household_appliances";
  
    headers: Headers;
    options: RequestOptions;
  
    constructor(private http: Http) {
      this.headers = new Headers({ 'Content-Type': 'application/json' });
      this.options = new RequestOptions({ headers: this.headers });
    }

    getAppliances(): Observable<Household_appliance[]> {
      return this.http
          .get(this.urlget)
          .map((response: Response) => {
              return <Household_appliance[]>response.json();
          })
          .catch(this.handleError);
  }
  
  setAppliance(appliance: Household_appliance): Observable<Household_appliance> {
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
