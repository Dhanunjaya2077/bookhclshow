import { Injectable,Input } from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class UserService{
  
  isUserLogged
  constructor(private _router:Router,private _http:HttpClient) { 
   this.isUserLogged=false;
  }
  setUserLoggedIn(){ 
   return this.isUserLogged=true;
  }
  getUserLoggedIn(){
   return this.isUserLogged;
  }
  LoggedIn(){
    return !!localStorage.getItem('currentUser');
  }
  userLogout(){
    localStorage.removeItem('currentUser');
    this._router.navigate(['home']);
   
  }
  userList(){
    return this._http.get('https://bookhclshow.firebaseio.com/users.json')
   /* 
    [
      {name:"Admin",username:"admin",password:"admin",gender:'Male',email:'dhanunjayavelikinti@gmail.com',phoneNumber:9206363517},
      {name:"Dhanunjaya",username:"dhanu",password:"dhanu",gender:'Male',email:'dhanunjayavelikinti@gmail.com',phoneNumber:9206363517},
      {name:"Satyanarayana",username:"satya",password:"satya"}   
    ]
    */
  }
  cityList(){
    return [
      {id:1, cityName:"Bangalore"},
      {id:2, cityName:"Hyderabad"},
      {id:3, cityName:"Chennai"},
      {id:4, cityName:"Mumbai"},
      {id:5, cityName:"Pune"}
    ]
  }

}