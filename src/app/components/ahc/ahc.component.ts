import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { ProservService } from 'src/app/services/proserv.service';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-ahc',
  templateUrl: './ahc.component.html',
  styleUrls: ['./ahc.component.scss']
})


export class AhcComponent implements OnInit {


  HighlightRow: number = -1;
  reportList : any = [];

  constructor(private cookie: CookieService,
              private router: Router,
              private proService: ProservService
              ) { }



  ngOnInit(): void {


    if (this.cookie.check('cec') && this.cookie.get('whois')) {

      this.refreshReports();

    } else {

      this.router.navigate(['']);


    }


  }

  selectRow(index: number): void {
    
    console.log('Index' + index);
    this.HighlightRow = index;

  }


  refreshReports() {

    this.proService.getReports(this.cookie.get('cec')).subscribe(data => {

      this.reportList = data;

      console.log(this.cookie.get('cec'))

      console.log(this.reportList)
    
    });
  }

}
