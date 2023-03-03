import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  butDisabled: boolean = true;

  constructor(private cookie: CookieService
             ) { }

  ngOnInit(): void {


    if (this.cookie.check('cec') && this.cookie.get('whois')) {

        this.butDisabled = false;

    }


  }

}
