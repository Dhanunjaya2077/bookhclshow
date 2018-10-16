import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
import {RouterModule,Routes} from '@angular/router';
import { HttpModule} from '@angular/http';
import {HttpClientModule} from '@angular/common/http';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginFormComponent } from './login-form/login-form.component';
import {AuthguardGuard} from './guard/authguard.guard';
import { BodyComponent } from './body/body.component';
import { SeatComponent } from './seat/seat.component';

import { UserService } from './shared/user.service';
import { ShowService } from './shared/show.service';
import { ShowlistComponent } from './showlist/showlist.component';
import { ShowdataPipe } from './shared/showdata.pipe';
import { UniquePipe } from './showlist/unique.pipe';
import { SignupComponent } from './signup/signup.component';
import { ProfilepageComponent } from './profilepage/profilepage.component';
const approutes:Routes=[
  {
    path:'login',
    component:LoginFormComponent
  },
   {
    path:'register',
    component:SignupComponent
  },
  {
    path:'home',
    component:BodyComponent,
  },
  {
    path:'seat',
    component:SeatComponent,
    canActivate:[AuthguardGuard]
  },
  {
    path:'showinfo',
    component:ShowlistComponent,
    canActivate:[AuthguardGuard]
  },
  {
    path:'Profile',
    component:ProfilepageComponent,
    canActivate:[AuthguardGuard]
  },
  {
    path:'',redirectTo:'/home',pathMatch:'full'
  },
]

@NgModule({
  imports:[ 
    BrowserModule, FormsModule ,
    ReactiveFormsModule,
    HttpModule,
    HttpClientModule,
    RouterModule.forRoot(approutes)
  ],
  declarations: [ AppComponent, HeaderComponent, FooterComponent, LoginFormComponent, BodyComponent, SeatComponent, ShowlistComponent, ShowdataPipe, UniquePipe, SignupComponent, ProfilepageComponent],
  bootstrap:    [ AppComponent ],
  providers: [UserService,AuthguardGuard,ShowService]
})
export class AppModule { }
