import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AccountgroupsService } from 'src/app/services/accountgroups.service';
import { OrderPipe } from 'ngx-order-pipe';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-accountgroups',
  templateUrl: './accountgroups.component.html',
  styleUrls: ['./accountgroups.component.scss']
})
export class AccountgroupsComponent implements OnInit {


  accGroupForm!: FormGroup;
  accGroup2Form!: FormGroup;
  private OAuth: any = '';
  orgName: any = '';
  accountsList: any = [];
  public accountGroups: any = '';
  public HighlightRow: number = -1;
  selectedRowIds: Set<number> = new Set<number>();
  order: string = 'organizationName';



  constructor(private account: FormBuilder,
              private account2: FormBuilder,
              private service: AccountgroupsService,
              private orderPipe: OrderPipe,
            ){
    
  }


  ngOnInit(): void {

    this.accGroupForm = this.account.group({

      OAuth: ['', Validators.required]

    })

    this.accGroup2Form = this.account2.group({

      selectedOrg: ['', Validators.required],
      selectedAccounts: ['', Validators.required],

    })

  }

  onOrganizationChange(){
    
    this.orgName = this.accGroup2Form.value.selectedOrg;
    console.log("si llegamos wey")
    //console.log(this.orgName)
    //console.log(this.accGroup2Form.value.selectedOrg)

    this.accountGroups.forEach((value: any, index: any) => {
        

        if (value.organizationName === this.orgName){

          this.accountsList.push(value);
          console.log(this.accountsList);
        }


      });

  }

  selectRow(index2: number): void {
    console.log('Row: ' + index2);
    this.HighlightRow = index2;

  }


  onFormSubmit(){


  }



  accgrps2table(accGroups: any){

    this.accountGroups = this.accountGroups.sort((a: any, b: any) => {
      return (b.organizationName) < (a.organizationName);
    });

  }

  onSubmit() {

    if (this.accGroupForm.valid) {

      console.log("send this to backend");

      this.OAuth = this.accGroupForm.value.OAuth;

      this.OAuth = { "OAuth": this.OAuth }

      this.service.getAccountGroups(this.OAuth).subscribe(res => {

        this.accountGroups = res

        if (this.accountGroups){          
          
          this.accountGroups = this.accountGroups.sort((a: any, b: any) => a.organizationName > b.organizationName ? 1 : -1);
          
          //console.log(this.accountGroups);
          
          //this.accgrps2table(this.accountGroups);

      
        }else{

          console.log("no hay pal perro");
        }


      
      });

    } else {

      console.log("throw the error")

    }



  }


}
