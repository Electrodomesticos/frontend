import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Outlet } from '../../Models/outlet'
import { Household_appliance } from '../../Models/household_appliance';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import { environment } from '../../../environments/environment';


@Injectable()
export class OutletsService {

  private urlget : string = environment.apipath+"/rooms/";
  private urlpost : string = environment.apipath+"/outlets";
  private urlgetA : string = environment.apipath+"/household_appliances";

  //private urlget : string = "http://localhost:3000/rooms/";
  //private urlpost : string = "http://localhost:3000/outlets";
  //private urlgetA : string = "http://localhost:3000/household_appliances";

  
    headers: Headers;
    options: RequestOptions;
  
    constructor(private http: Http) {
      this.headers = new Headers({ 'Content-Type': 'application/json' });
      this.options = new RequestOptions({ headers: this.headers });
    }

    updateOutlet(outlet): Observable<Outlet> {
      const url = `${this.urlpost}/${outlet.id}`;
      console.log(url)
      return this.http.put(url, JSON.stringify(outlet), 
        this.options).map((res: Response) => res.json())
        .catch(this.handleError);
    }

    getAppliances(): Observable<Household_appliance[]> {
      return this.http
          .get(this.urlgetA)
          .map((response: Response) => {
              return <Household_appliance[]>response.json();
          })
          .catch(this.handleError);
  }


  getMyAppliance(outlet): Observable<Household_appliance> {
    return this.http
        .get(this.urlpost+"/"+outlet+"/household_appliances")
        .map((response: Response) => {
            return <Household_appliance>response.json();
        })
        .catch(this.handleError);
}
  
  updateAppliance(appliance): Observable<Household_appliance> {
    const url = `${this.urlgetA}/${appliance.id}`;
    console.log(url)
    return this.http.put(url, JSON.stringify(appliance), 
      this.options).map((res: Response) => res.json())
      .catch(this.handleError);
  }

    setOutlets(outlet: Outlet): Observable<Outlet> {
      return this.http.post(this.urlpost, JSON.stringify(outlet), this.options).map(response => response.json())
    }

    deleteOutlet(id: number): Observable<Outlet> {
      const url = `${this.urlpost}/${id}`;
      console.log(url)
      return this.http.delete(url, this.options)
      .map(this.extractData)
      .catch(this.handleError);         
    }
    


    getOutlets(room_id): Observable<Outlet[]> {
      return this.http
          .get(this.urlget+room_id+'/outlets')
          .map((response: Response) => {
              return <Outlet[]>response.json();
          })
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
