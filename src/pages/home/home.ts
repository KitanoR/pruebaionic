import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ProviderLoginProvider } from '../../providers/provider-login/provider-login';

import { PagesLoginPage } from "../pages-login/pages-login";

import "rxjs/add/operator/catch";
import "rxjs/add/operator/map";
import { Observable } from 'rxjs/Observable';
import "rxjs/add/observable/throw";

@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  username: string = "";
  password: string = "";
  data: any;
  constructor(
    public navCtrl: NavController,
    private _login: ProviderLoginProvider
  ) {
   
  }
  ionViewDidLoad() {
    console.log("ionViewDidLoad Home");
    this.getDat();
  }
  getDat() {
    this._login
      .getPeticion()
      .map(da => {
        this.data = da;
        console.log(this.data);
      })
      .subscribe(data => {
        this.data = data;
      },error =>{
        if (error.status === 403) {
          console.log('easdfasdf');
        }
      });
  }
}
