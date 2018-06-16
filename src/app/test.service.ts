import { Injectable } from '@angular/core';
import { Github } from "./github";
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';

// Operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class TestService {
  
  private _url: string = 'https://api.github.com/search/users?q=tom'
   private allurl: string = 'https://api.github.com/users'
   
  constructor(private _http:Http) { }
  
  getProfiles(){
    return this._http.get(this._url)
    .map((resp: Response)=> resp.json())
    .catch(err =>{
      return Observable.throw(err.json() || 'Server Error')
    });
  }
  
  getUser(login: string):Observable<Profiles>{
    return this._http.get(`${this.allurl}/${login}`)
    .map((resp: Response)=> resp.json())
    .catch(err =>{
      return Observable.throw(err.json() || 'Server Error')
    });
  }
  
  
  // searchArtists(searchItem: string){
  //   let url = this._url + searchItem
  //   return this._http.get(this._url).map(res => res.json())
    
  // }
}
