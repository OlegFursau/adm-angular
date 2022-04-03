import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private route: Router) { }

  setToken(token: string){
    localStorage.setItem('token', token);

  }

  getToken(){
    return localStorage.getItem('token');
  }

  isLoggedIn(){
    return this.getToken()!==null;
  }

  logIn(userInfo:{email:string, password:string}): Observable <string | boolean>{
    if(userInfo.email ==='admin@gmail.com' && userInfo.password === 'admin123'){
      this.setToken('dasdododoododcccc')
      return of(true);
    }
    return throwError(()=> new Error('Faild login or password'))

  }

  logOut(){
    this.route.navigate(['login'])
  }
}
