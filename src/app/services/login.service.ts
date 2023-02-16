import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Buffer } from 'buffer'; 

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  readonly APIurl = "https://te-health.dev:5002/login"
  private headers = new HttpHeaders();

  constructor(private http: HttpClient) { }


  getAuth(token: any){

    
    return this.http.get(this.APIurl, { headers: { 'Authorization': 'Basic ' + token }});

  }
 

}
