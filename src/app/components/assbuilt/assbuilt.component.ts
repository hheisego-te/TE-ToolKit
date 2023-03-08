import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { ProservService } from 'src/app/services/proserv.service';

@Component({
  selector: 'app-assbuilt',
  templateUrl: './assbuilt.component.html',
  styleUrls: ['./assbuilt.component.scss']
})


export class AssbuiltComponent implements OnInit {


  HighlightRow: number = -1;
  reportList: any = [];
  taskMission: boolean = true;
  ModalTitle: string = "Request AS-Built";


  constructor(private cookie: CookieService,
              private router: Router,
              private proService: ProservService
          
              ) { }



  ngOnInit(): void {


    if (this.cookie.check('cec') && this.cookie.check('whois')) {

      console.log("ya estamos")

    } else {

      this.router.navigate(['']);

    }

  }


  closeModal() {

    this.taskMission = false;
    //this.refreshUsers();

  }

  selectRow(index: number): void {

    console.log('Index' + index);
    this.HighlightRow = index;

  }


  refreshReports() {

    this.proService.getAsBuilt(this.cookie.get('cec')).subscribe(data => {

      this.reportList = data;

      console.log(this.cookie.get('cec'))

      console.log(this.reportList)

    });
  }


}
