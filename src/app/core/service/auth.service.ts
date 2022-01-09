import { Injectable } from '@angular/core';
import {User} from '../models/user'; //importamos el modelo de usaurio
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http'; 
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // Ruta hacia mi backend y header en json
  endpoint: string = 'https://mybackendgym.herokuapp.com';
  //endpoint: string = 'http://localhost:3000';
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  currentUser = {};

  constructor(
    private http:HttpClient,
    public router:Router
  ) { 

  }

// Sign-up
signUp(user: User): Observable<any> {
  let api = `${this.endpoint}/api/register-user`;
  return this.http.post(api, user)
    .pipe(
      catchError(this.handleError)
    )
}

// Sign-in
signIn(user: User) {
  return this.http.post<any>(`${this.endpoint}/api/signin`, user)
    .subscribe((res: any) => {
      localStorage.setItem('access_token', res.token)
      console.log("el token es"+res.token)
      //Seteamos el token
      this.getUserProfile(res._id).subscribe((res) => {
        this.currentUser = res;
        this.router.navigate(['user-profile/' + res.msg._id]);
      //Volvemos al user-profile una vez ejecutada la función
      })
    })
}

getToken() {
  return localStorage.getItem('access_token');
}
//
get isLoggedIn(): boolean {
  let authToken = localStorage.getItem('access_token');
  return (authToken !== null) ? true : false;
}

doLogout() {
  let removeToken = localStorage.removeItem('access_token');
  if (removeToken == null) {
    this.router.navigate(['log-in']);
  }
}

// User profile
getUserProfile(id: any): Observable<any> {
  let api = `${this.endpoint}/api/user-profile/${id}`;
  return this.http.get(api, { headers: this.headers }).pipe(
    map((res: any) => {
      return res || {}
    }),
    catchError(this.handleError)
  )
}

// Error 
handleError(error: HttpErrorResponse) {
  let msg = '';
  if (error.error instanceof ErrorEvent) {
    // client-side error
    msg = error.error.message;
  } else {
    // server-side error
    msg = `Error Code: ${error.status}\nMessage: ${error.message}`;
  }
  return throwError(msg);
}
}


