import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ApiServiceProvider } from '../../providers/api-service/api-service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers:[ApiServiceProvider]
})
export class HomePage {

  email:string;
  password:string;
  users:any;

  constructor(public navCtrl: NavController,public apiCall:ApiServiceProvider) {
    this.helloApiCall();
  }

  helloApiCall(){
    this.apiCall.testApiCall()
    .subscribe(data=>{
      console.log("data");
      console.log(data);
      this.users=data;
    },err=>{
      console.log("err");
      console.log(err);
    });
  }

  login(){
    console.log(this.email+" "+this.password);
    var params={
      email:this.email,
      password:this.password
    }
    this.apiCall.login(params)
    .subscribe(data=>{
      console.log(data);
    },err=>{
      console.log(err);
    });
  }

}
