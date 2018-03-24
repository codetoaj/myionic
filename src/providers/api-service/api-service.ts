import { Injectable } from '@angular/core';
import { Http, RequestOptions,Headers } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class ApiServiceProvider {

  constructor(public http: Http) {

  }

  testApiCall(){
    var url="http://localhost:8080/TestGSON/getAllUsers";
    var response=this.http.get(url).map(res=>res.json());
    return response;
  }

  login(params){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let options = new RequestOptions({ headers: headers });
    var url="http://localhost:8080/TestGSON/Login";
    var response=this.http.post(url,params,options).map(res=>res.json());
    return response;
  }

}
