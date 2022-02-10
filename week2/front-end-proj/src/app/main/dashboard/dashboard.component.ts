import { Component, OnInit } from '@angular/core';
import {ShareService}  from '../../share.service';
import { Router } from '@angular/router';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private user: ShareService,private router :Router) { }

  id:any;
  isTrue=false;
  
  public profiles:any;
  public Order:any;
  public count:any;
  message:string="thisisparentMessage";
  

  ngOnInit(): void {
    this.details()
    
  }
  details(){
    this.user.getUser()
    .subscribe(data =>{ this.profiles=data,
      console.log(this.profiles)
      this.count=this.profiles.length;
      console.log(this.count)});
      
  }
  
  showDetails(){
    this.isTrue=!this.isTrue;

  }
  view(event:any){
     this.id=event.target.id;
    this.router.navigate(["/main/profile/"+this.id]);
  }
  edit(event:any){
    this.id=event.target.id;
    this.router.navigate(["/main/updateInfo/"+this.id]);
  }
}
