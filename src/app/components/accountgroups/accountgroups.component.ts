import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AccountgroupsService } from 'src/app/services/accountgroups.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-accountgroups',
  templateUrl: './accountgroups.component.html',
  styleUrls: ['./accountgroups.component.scss']
})
export class AccountgroupsComponent implements OnInit {


  accGroupForm!: FormGroup;
  private OAuth: any = '';
  private getRequest: any = {};
  public accountGroups: any = '';

  constructor(private account: FormBuilder,
    private service: AccountgroupsService
  ) { }


  ngOnInit(): void {

    this.accGroupForm = this.account.group({

      OAuth: ['', Validators.required]

    })

  }

  onSubmit() {

    if (this.accGroupForm.valid) {

      console.log("send this to backend");

      this.OAuth = this.accGroupForm.value.OAuth;

      this.OAuth = { "OAuth": this.OAuth }



      this.service.getAccountGroups(this.OAuth).subscribe(res => {

        this.accountGroups = res
        console.log(this.accountGroups)


      });

    } else {

      console.log("throw the error")

    }



  }


}
