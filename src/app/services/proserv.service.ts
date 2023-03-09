import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class ProservService {


  readonly APIurl = "https://te-health.dev:5003"

  constructor(private http: HttpClient) { }

  getReports(cec: any): Observable<any[]> {

    return this.http.get<any>(this.APIurl + '/te-health/' + cec);

  }

  getAsBuilt(cec: any): Observable<any[]> {

    return this.http.get<any>(this.APIurl + '/as-built/' + cec);

  }

  newReport(request: any) {

    return this.http.post(this.APIurl + '/request-report/', request);

  }


}
