import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Room } from '../../Models/room'
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class RoomsService {
  
  private urlget : string = "http://localhost:3000/rooms";

  //headers: Headers;
  //options: RequestOptions;

  constructor(private http: Http) {
    //this.headers = new Headers({ 'Content-Type': 'application/json' });
    //this.options = new RequestOptions({ headers: this.headers });
  }
  /*
  getRooms(): Observable<Room[]> {
    return this.http.get(this.urlget).map((response: Response) => <Room[]>response.json().data);
  }
  */

  getRooms(): Observable<Room[]> {
    return this.http
        .get(this.urlget)
        .map((response: Response) => {
            return <Room[]>response.json();
        })
        .catch(this.handleError);
}

private handleError(error: Response) {
    return Observable.throw(error.statusText);
}


}
