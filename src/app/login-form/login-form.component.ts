import { Component, OnInit, NgZone  } from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms';
import {Router} from '@angular/router';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  userLogin:any;
  userInvalidLogin:string;
  invalid=false;
constructor(private _router:  Router,private _userService:UserService,private zone: NgZone) { }

  ngOnInit() {
    this._userService.userList().subscribe(
      data=>this.userLogin=data)
      console.log(this.userLogin)
  }
  form=new FormGroup({
      username:new FormControl("",[
      Validators.required, 
      Validators.minLength(3),
    ]),
      password:new FormControl("",Validators.required)
    
  })
  get username(){
    return this.form.get('username');
  }
  get password(){
    return this.form.get('password');
  }
    Login(){

    let username=this.form.value.username;
    let password=this.form.value.password;
    this.userLogin.filter((v,i,a)=>
    {
      if(a[i].username==username && a[i].password==password){
        this.zone.runOutsideAngular(() => {
          location.reload();
      });
        this._userService.setUserLoggedIn();  
        this._router.navigate(['showinfo']);
        let userLoginDetails={
          'name':a[i].name,'username':a[i].username,'password':a[i].password,'email':a[i].email,'phoneNumber':a[i].phoneNumber,'gender':a[i].gender
        }
        console.log(userLoginDetails);
        localStorage.setItem('currentUser',JSON.stringify(userLoginDetails));
      }
     
      else{
        this.invalid=true;
        this.userInvalidLogin="Invalid Login or sign up to create account";
      }
    });
     
    }
}