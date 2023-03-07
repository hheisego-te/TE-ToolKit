import { Component, OnInit, Input } from '@angular/core';
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

  @Input() mission = ''; 

  accGroupForm!: FormGroup;
  accGroup2Form!: FormGroup;
  taskMission: boolean = true;
  
  private OAuth: any = '';
  orgName: any = '';
  accountsList: any = [];
  noTodoList: any = [];
  public accountGroups: any = '';
  public HighlightRow: number = -1;
  selectedRowIds: Set<number> = new Set<number>();
  order: string = 'organizationName';
  private reportRequest: any = [];



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
    //this.accGroup2Form.value.selectedAccounts = [];

    this.accountGroups.forEach((value: any, index: any) => {
        

        if (value.organizationName === this.orgName){

          this.accountsList.push(value);
          
        }


      });

    

  }


  onFormSubmit(){

    //this.accGroup2Form.value.selectedOrg = '';
    
    this.reportRequest = this.accGroup2Form.value.selectedAccounts;
    this.reportRequest.mission = this.mission;
    console.log(this.mission);
    console.log(this.reportRequest);
    this.noTodoList = ["Issue new OAuth"];
    this.accGroupForm.reset();
    this.accGroup2Form.reset();
    this.taskMission = false;
    

  }


  closeModal() {


    this.accGroupForm.reset();
    this.accGroup2Form.reset();
    this.taskMission = false;
    //this.refreshUsers();

  }


  onSubmit() {

    if (this.accGroupForm.valid) {

      console.log("send this to backend");

      this.OAuth = this.accGroupForm.value.OAuth;

      this.OAuth = { "OAuth": this.OAuth };

      this.service.getAccountGroups(this.OAuth).subscribe(res => {

        this.accountGroups = res

        if (this.accountGroups){          
          
          this.accountGroups = this.accountGroups.sort((a: any, b: any) => a.organizationName > b.organizationName ? 1 : -1);
          
          this.noTodoList = this.accountGroups.filter((v: any, i: any, a: any) => a.findIndex((v2: { organizationName: any; }) => (v2.organizationName === v.organizationName)) === i);

          //this.noTodoList = this.accountGroups.filter((v: any, i: any, a: any) => a.findIndex((t: { id: any; }) => t.id === v.id) === i);

      
        }else{

          console.log("no hay pal perro");
        }


      
      });

    } else {

      console.log("throw the error")

    }



  }


}
