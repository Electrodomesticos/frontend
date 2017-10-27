import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Room } from '../../Models/room'
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class RoomsService {
  
  private urlget : string = "http://192.168.99.103:3000/rooms";

  headers: Headers;
  options: RequestOptions;

  constructor(private http: Http) {
    this.headers = new Headers({ 'Content-Type': 'application/json' });
    this.options = new RequestOptions({ headers: this.headers });
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

setRooms(room: Room): Observable<Room> {
  return this.http.post(this.urlget, JSON.stringify(room), this.options).map(response => response.json())
}

updateRoom(room): Observable<Room> {
  const url = `${this.urlget}/${room.id}`;
  console.log(url)
  return this.http.put(url, JSON.stringify(room), 
    this.options).map((res: Response) => res.json())
    .catch(this.handleError);
}

deleteRoom(id: number): Observable<Room> {
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
