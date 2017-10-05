import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Outlet } from '../../Models/outlet'
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class OutletsService {

  private urlget : string = "http://localhost:3000/rooms/";
  private urlpost : string = "http://localhost:3000/outlets";
  
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

}