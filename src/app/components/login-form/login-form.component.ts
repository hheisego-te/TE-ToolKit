import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Buffer } from 'buffer';
import Swal from 'sweetalert2';
import { LoginService } from 'src/app/services/login.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit{

  login_response: any = '';
  token: any = '';
  loginForm!: FormGroup;
  
  constructor(private cec: FormBuilder,
              private router: Router,
              private service: LoginService,
              private cookie:CookieService
              ){}



  ngOnInit(): void {

    this.loginForm = this.cec.group({

      username: ['', Validators.required],
      password: ['', Validators.required]

    })


  }

  onSubmit(){

    if(this.loginForm.valid){

      console.log("send this to backend");
      
      this.token = Buffer.from(this.loginForm.value.username + ":" + this.loginForm.value.password).toString('base64');
      
      this.service.getAuth(this.token).subscribe(res=>{

      this.login_response = res;
        
        if (this.login_response['status'] === 401) {

          
          Swal.fire({
            position: 'center',
            icon: 'error',
            title: this.login_response['details'],
            timerProgressBar: true,
            showConfirmButton: false,
            timer: 2345,

          })

        } else if (this.login_response['access_token']){

          this.cookie.set("cec", this.login_response['sub'], 1);
          this.cookie.set("whois", this.login_response['fullname'], 1);
          this.cookie.set("email", this.login_response['email'], 1);

          this.router.navigate(['dashboard']);

        }
        
      });

      
      
      //this.router.navigate(['dashboard']);
    }
    else{
      console.log("throw the error")
    }

  }

}


