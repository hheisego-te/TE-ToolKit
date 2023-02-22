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
  noTodoList: any = [];
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

    this.accountsList =  [];
    this.accGroup2Form.value.selectedAccounts = null;

    this.accountGroups.forEach((value: any, index: any) => {
        

        if (value.organizationName === this.orgName){

          this.accountsList.push(value);
          
        }

      });

    

  }

  selectRow(index2: number): void { //ya nos podemos deshacer de esta mmda
    console.log('Row: ' + index2);
    this.HighlightRow = index2;

  }


  onFormSubmit(){

    this.accGroup2Form.value.selectedOrg = null;
    this.accGroup2Form.value.selectedAccounts = null;

    console.log(this.accGroup2Form.value.selectedAccounts);

  }



  accgrps2table(accGroups: any){//esta tambien ya nos la vamos a chngr

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
          
          this.noTodoList = this.accountGroups.filter((v: any, i: any, a: any) => a.findIndex((v2: { organizationName: any; }) => (v2.organizationName === v.organizationName)) === i);

          //this.noTodoList = this.accountGroups.filter((v: any, i: any, a: any) => a.findIndex((t: { id: any; }) => t.id === v.id) === i);


          console.log(this.noTodoList);
      
        }else{

          console.log("no hay pal perro");
        }


      
      });

    } else {

      console.log("throw the error")

    }



  }


}
