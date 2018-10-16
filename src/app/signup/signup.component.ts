import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
registerUser={};
  constructor(private _http:HttpClient) { }
  ngOnInit() {
  }
  registerForm=new FormGroup({
      name:new FormControl(),
      username:new FormControl(),
      password:new FormControl()
    
  })
  register(){
    this.registerUser={
      "name":this.registerForm.value.name,
      "username" :this.registerForm.value.username,
      "password":this.registerForm.value.password
    }
    this._http.post('https://bookhclshow.firebaseio.com/users.json',JSON.stringify(this.registerUser)).subscribe(res=>
    console.log(res)
    )
  }
}