import { Component, OnInit } from '@angular/core';
import {ShareService}  from '../../share.service'; 
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators,FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  constructor(private user: ShareService,private router:Router) { }

  


  userData= {
    email:'',
    mobile:'',
    password:""
  };
  pswd:any;

  signForm=new FormGroup({
    email:new FormControl('', Validators.required ),
    mobile:new FormControl('', Validators.required ),
  password:new FormControl('', [Validators.required, Validators.minLength(8)]),
  cnfPassword:new FormControl('', [Validators.required, Validators.minLength(8)]),
 
 });

 ngOnInit(): void {
}

  
  callpost(){
    if(this.signForm.invalid){
      this.signForm.markAllAsTouched();
      return
    }
    this.userData.email=this.signForm.value['email'];
    
    this.userData.mobile=this.signForm.value['mobile'];
    this.userData.password=this.signForm.value['password']
    this.user.callpost(this.userData)
    .subscribe(data=>console.log(data));
    this.router.navigate(["/main/dashboard"]);
  }

  
  


  get emailValidator(){
    return this.signForm.get('email')
  }
  get mobileValidator(){
    return this.signForm.get('mobile')
  }
  
  
  get passwordValidator(){
    return this.signForm.get('password')
  }
  get cnfPasswordValidator(){
    return this.signForm.get('cnfPassword')
  }
  get checkcnf(){
    if (this.passwordValidator && this.cnfPasswordValidator && this.passwordValidator.value==this.cnfPasswordValidator.value) return true
      return false;
    
  }


}
