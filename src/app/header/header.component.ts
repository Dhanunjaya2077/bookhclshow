import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  userLoginDetatils={};
  constructor(private userService:UserService) { }
  ngOnInit() {
    this.userLoginDetatils=JSON.parse(localStorage.getItem('currentUser'));
  }


}