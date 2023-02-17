import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Buffer } from 'buffer';

@Injectable({
  providedIn: 'root'
})


export class AccountgroupsService {

  readonly APIurl = "https://te-health.dev:5002/accountgroups"
  //private headers = new HttpHeaders();
  //private params = new HttpParams();

  constructor(private http: HttpClient) { }


  getAccountGroups(OAuth: any): Observable<any> {

    console.log(OAuth)
    return this.http.put(this.APIurl, OAuth);

  }
}
