import { Injectable, OnInit } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Room } from '../../Models/room'
import { Observable } from 'rxjs/Observable';
import { UserService } from '../../ladp/user.service';
import 'rxjs/Rx';

@Injectable()
export class RoomsService {
  
  private urlget : string = "http://192.168.99.102:3000/rooms";
  //private urlget : string = "http://localhost:3000/rooms";
  private urlgetUser : string ;
  
  private user : any ;

  headers: Headers;
  options: RequestOptions;

  constructor(private http: Http, private userService: UserService) {
    this.headers = new Headers({ 'Content-Type': 'application/json' });
    this.options = new RequestOptions({ headers: this.headers });

    this.urlgetUser = "http://192.168.99.102:3000/users/"+this.userService.getUser().id+"/rooms";
    //this.urlgetUser = "http://localhost:3000/users/"+this.userService.getUser().id+"/rooms";
  }
  /*
  getRooms(): Observable<Room[]> {
    return this.http.get(this.urlget).map((response: Response) => <Room[]>response.json().data);
  }
  */
 

  getRooms(): Observable<Room[]> {
    return this.http
        .get(this.urlgetUser)
        .map((response: Response) => {
            return <Room[]>response.json();
        })
        .catch(this.handleError);
}

setRooms(room: Room): Observable<Room> {
  room.user_id = this.userService.getUser().id;
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
