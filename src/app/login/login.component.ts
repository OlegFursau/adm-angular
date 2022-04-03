import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService } from '../services/service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;

  constructor(
    private serviceService: ServiceService,
    private route: Router ) { };



  ngOnInit(): void {
    this.loginForm=new FormGroup({
      'email': new FormControl('',[Validators.required,Validators.email]),
      'password': new FormControl('',[Validators.required,Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)[A_Za-z\d]{8,}$/)])
    });
    if(this.serviceService.isLoggedIn()){
      this.route.navigate(['admin'])
    }

  }

  submitLogin(){
    this.serviceService.logIn(this.loginForm.value).subscribe({
      next: ()=> this.route.navigate(['admin']),
      error: (err)=>alert(err.message)
    })




  }

}
