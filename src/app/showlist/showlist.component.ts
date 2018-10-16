import { Component, OnInit } from '@angular/core';
import { ShowService } from '../shared/show.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-showlist',
  templateUrl: './showlist.component.html',
  styleUrls: ['./showlist.component.css']
})
export class ShowlistComponent implements OnInit {
  Showlist:any;
  showTimings:any[];
  movieIndex:number;
  message="Loading....";
  selectedMovieName:string;
  selectedShowTimings;
  selectedShowTheatre:any[];
  bookedSeats:any[];
 showTimingsLength:number;
  constructor(private _showService:ShowService,private _router:Router){
  }
   ngOnInit(){
    this._showService.showList().subscribe(
      data=> this.Showlist= data)
      console.log(this.Showlist);
  }
  selectedMovie(movie){
    this.showTimings=[];
    this.selectedMovieName='';
    this.selectedShowTheatre=[];
    this.Showlist.filter((v,i,a)=>{
       if(a[i].movieName===movie){ 
         this.selectedMovieName =movie;
         this.showTimings.push(this.Showlist[i].showTimings);
        this.selectedShowTheatre.push(this.Showlist[i].theaterName);
        this.bookedSeats=this.Showlist[i].bookedSets;
       }
      });    
    }

  selectedShowTiming(time){
   this.selectedShowTimings=time;
   this._showService.myMethod(this.selectedMovieName,time,this.selectedShowTheatre,this.bookedSeats);
   this._router.navigate(['/seat']);
  }

}