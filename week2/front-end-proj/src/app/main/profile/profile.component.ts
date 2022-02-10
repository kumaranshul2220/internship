import { Component, Input, OnInit } from '@angular/core';
import {ShareService}  from '../../share.service';
import { ActivatedRoute, Router, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  @Input()
  parentMessage:string | undefined;

  constructor(private user: ShareService,private router :Router,private routerSnap:ActivatedRoute) { }

  public profiles:any;
  id:any;
  
  public UData={
  }

  ngOnInit(): void {
    this.details()

  }
  userData :any;

  details(){
   this.id=this.routerSnap.snapshot.params['id'];
    this.user.getUser()
    .subscribe(data =>{ this.profiles=data,
      this.userData=this.profiles[this.id]});
  }
  observe(){
    this.user.getUserData()
    .subscribe(data =>{ this.UData=data});
  }

}
