import { Injectable } from '@angular/core';
import {Http,Response} from '@angular/http';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class ShowService {
  selectedMovieName:string;
  selectedShowTimings;
  selectedShowTheatre:string;
  bookedSeats:any[];


    constructor(private _http:HttpClient) {

    }
    myMethod(a,b,c,d) {
        this.selectedMovieName=a;
        this.selectedShowTimings=b;
        this.selectedShowTheatre=c;
        this.bookedSeats=d;
    }

  showList(){
   return this._http.get("https://bookhclshow.firebaseio.com/users.json")
  }
    /*
    [

     {
        movieName:"Geeth Goindam-Telugu",
        theaterName:"Innovative Multiplex,Marathahalli",
        showTimings : ["06:00 AM","10:00 PM","03:00 PM","09:00 PM"],
        bookedSets:['A2', 'A3', 'F5', 'F1', 'F2','F6', 'F7', 'F8', 'H1']
        
      },
        {
        movieName:"Geeth Goindam-Telugu",
        theaterName:"Sri Vinayaka Tulasi 4K Digital,Marathahalli",
        showTimings : ["07:00 AM","11:00 PM","04:00 PM","08:00 PM"],
        bookedSets:['A2', 'A3', 'F5', 'F1', 'F2','F6', 'F7', 'F8', 'H1']
        
      },
      {
        movieName:"The nun-Hindi,English",
        theaterName:"Innovative Multiplex,Marathahalli",
        showTimings : ["09:00 AM",":01:00 PM","06:00 PM","10:00 PM"],
        bookedSets:['A1', 'A9', 'C4', 'C8']
    
        
      },
      {
        movieName:"Stree -Hindi",
 
        theaterName:"PVR -  Orion Mall, Dr Rajkumar Road",
        showTimings : ["06:00 AM","12:00 PM","06:00 PM","09:00 PM"],
        bookedSets:['A2', 'A3', 'F5', 'F1', 'F2','F6', 'F7', 'F8', 'H1', 'H2', 'H3', 'H4']
        
        
      },
      {
        movieName:"Sarkari. Hi. Pra. Shale Kasaragodu, Koduge : Ramanna Rai-Kannada",

        theaterName:"PVR -  Arena Mall, Doddanakundi",
        showTimings : ["07:00 AM","10:00 PM","01:00 PM","03:00 PM","06:00 PM"],
        bookedSets:['C6', 'B4', 'F5', 'F1', 'F2','F6', 'F7', 'F8', 'H1', 'H2', 'H3', 'H4']
     
        
      }
   ]
   */

}