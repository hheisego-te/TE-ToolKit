import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {


  constructor(private cookie: CookieService,
              private router: Router){}


  ngOnInit(): void {


    if (this.cookie.check('cec') && this.cookie.get('whois')){

    Swal.fire({
      position: 'top-right',
      icon: 'success',
      title: 'Access Granted',
      timerProgressBar: true,
      showConfirmButton: false,
      timer: 1357,

    })

  } else {
    
      this.router.navigate(['']);
     

  }
  }

}
