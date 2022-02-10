import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {UDetails} from './Userdetails';

import { Observable, throwError } from 'rxjs';
import { tap,map,catchError, retry } from 'rxjs/operators';




@Injectable({
  providedIn: 'root'
})
export class ShareService {

  

  constructor(private http:HttpClient) { }
  public logIn =false;

  
  IsUserLoggedIn(){
    return !!this.logIn; 
    
  }
  getUser(){
    return this.http.get("http://localhost:3002/api/v1/users/details");
  }

  callpost(userData:any){
    this.logIn=true;
    return this.http.post("http://localhost:3002/api/v1/test", userData);
  }
  getUserData(){
    let headers:HttpHeaders= new HttpHeaders({
        'Authorization':'auth-tokens'
      })
      headers = headers
      .set('Bearer', 'Access auth-Token')
      .set('Accept','/json');
  

    return this.http.get<UDetails[]>("http://localhost:3002/api/v1/struct" ,{headers:headers}).pipe(
      tap(data =>
      console.log('All: ' + JSON.stringify(data)))
    );
  }

  
}
