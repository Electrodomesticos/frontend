import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Categorie } from '../../Models/categorie';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import { UserService } from '../../ladp/user.service';


@Injectable()
export class CategoriesService {
  private urlget : string = "http://192.168.99.102:3000/categories";
  private urlgetUser : string ;

  private currentUser : any;

    headers: Headers;
    options: RequestOptions;
  
    constructor(private http: Http, private userService: UserService) {
      this.headers = new Headers({ 'Content-Type': 'application/json' });
      this.options = new RequestOptions({ headers: this.headers });

      this.urlgetUser = "http://192.168.99.102:3000/users/"+this.userService.getUser().id+"/categories";
      
    }

    getCategories(): Observable<Categorie[]> {
      return this.http
          .get(this.urlgetUser)
          .map((response: Response) => {
              return <Categorie[]>response.json();
          })
          .catch(this.handleError);
  }
  
  setCategorie(categorie: Categorie): Observable<Categorie> {
  //  categorie.user = this.userService.getUser();
    return this.http.post(this.urlget, JSON.stringify(categorie), this.options).map(response => response.json())
  }
  
  updateCategorie(categorie): Observable<Categorie> {
    const url = `${this.urlget}/${categorie.id}`;
    console.log(url)
    return this.http.put(url, JSON.stringify(categorie), 
      this.options).map((res: Response) => res.json())
      .catch(this.handleError);
  }
  
  deleteCategorie(id: number): Observable<Categorie> {
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
