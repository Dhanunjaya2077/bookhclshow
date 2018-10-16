import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  constructor(private userService:UserService,private _router:Router) { }
  cityList=[];
 
  ngOnInit() {
    this.cityList=this.userService.cityList(); 
     
  }
  cityClick(){
    this._router.navigate(['/login']);
  }

}