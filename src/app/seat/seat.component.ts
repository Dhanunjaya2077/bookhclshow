import { Component,OnInit } from '@angular/core';
import { ShowService } from '../shared/show.service';

//Component decorator
@Component({
    selector: 'seat-list',
    templateUrl: './seat.component.html',
    styleUrls: ['./seat.component.css']
})
export class SeatComponent implements OnInit{
    data:any[];
   //variable declarations
    movieTitle:string;
    screen: string = "LUXE CINEMAS";
    time:any[];
    rows: string[] = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
    cols: number[]  = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    reserved: string[];
    selected: string[] = [];
    ticketPrice: number = 120;
    convFee: number = 30;
    totalPrice: number = 0;
    currency: string = "Rs";

  constructor(private _showService:ShowService){
  }
   ngOnInit(){
   this.time=this._showService.selectedShowTimings;   
   this.movieTitle=this._showService.selectedMovieName;
   this.screen=this._showService.selectedShowTheatre;
   this.reserved=this._showService.bookedSeats;
  }

    //return status of each seat
    getStatus = function(seatPos: string) {
        if(this.reserved.indexOf(seatPos) !== -1) {
            return 'reserved';
        } else if(this.selected.indexOf(seatPos) !== -1) {
            return 'selected';
        }
    }
    //clear handler
    clearSelected = function() {
        this.selected = [];
    }
    //click handler
    seatClicked = function(seatPos: string) {
        var index = this.selected.indexOf(seatPos);
        
        if(index !== -1) {
            // seat already selected, remove
            this.selected.splice(index, 1)
        } else {
            //push to selected array only if it is not reserved
            if(this.reserved.indexOf(seatPos) === -1)
                this.selected.push(seatPos);
        }
    }
    //Buy button handler
    showSelected = function() {
        if(this.selected.length > 0) {
            alert("Selected Seats: " + this.selected + "\nTotal: "+(this.ticketPrice * this.selected.length + this.convFee));
        } else {
            alert("No seats selected!");
        }
    }
}