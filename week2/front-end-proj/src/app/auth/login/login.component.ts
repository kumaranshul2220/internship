import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators,FormBuilder } from '@angular/forms';
import {ShareService}  from '../../share.service'; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private user: ShareService, private router :Router) { }

  //imgsrc="/assets/images/bgimg.jpg";
  //alt="image";

  userData= {
    email:'',
    password:""
  };

  regForm=new FormGroup({
    email:new FormControl('', Validators.required ),
  password:new FormControl('', [Validators.required, Validators.minLength(8)]),
 
 });

  ngOnInit(): void {
  }

  callpost(){
    if(this.regForm.invalid){
      this.regForm.markAllAsTouched();
      return
    }
    /*this.userData.email=this.regForm.value['email'];
    
    this.userData.password=this.regForm.value['password']*/
     this.user.callpost({email:this.regForm.value['email'],
                         password:this.regForm.value['password']
                        })
    .subscribe(data=>{
      console.log(data)
      this.router.navigate(["/main/dashboard"]);
    });

    
  }

  



  get emailValidator(){
    return this.regForm.get('email')
  }
  
  
  get passwordValidator(){
    return this.regForm.get('password')
  }
  get cnfPasswordValidator(){
    return this.regForm.get('cnfPassword')
  }

}
