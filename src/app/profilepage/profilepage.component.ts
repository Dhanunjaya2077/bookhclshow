import { Component, OnInit } from '@angular/core';
import {Userdetails} from './userdetails';

@Component({
  selector: 'app-profilepage',
  templateUrl: './profilepage.component.html',
  styleUrls: ['./profilepage.component.css']
})
export class ProfilepageComponent implements OnInit {

   userLoginDetatils={};
  constructor() { }
  ngOnInit() {
    this.userLoginDetatils=JSON.parse(localStorage.getItem('currentUser'));
  }

}