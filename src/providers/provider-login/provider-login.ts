import {
  Http,
  Response,
  Headers,
  RequestOptions,
  RequestOptionsArgs
} from "@angular/http";
import { Injectable } from '@angular/core';
import "rxjs/add/operator/catch";
import "rxjs/add/operator/map";
import { Observable } from "rxjs/Observable";

import { PagesLoginPage } from "../../pages/pages-login/pages-login";
/*
  Generated class for the ProviderLoginProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ProviderLoginProvider {
  constructor(public http: Http) {}

  getPeticion() {
    let ulr: string = "http://192.168.1.10:8000/ejercicio/listar/0/1/?page=1";
    let header = new Headers({
      "Content-Type": "application/json"
    });
    header.append("Access-Control-Allow-Credentials", "true");

    return this.http
      .get(ulr, { withCredentials: true });
      
  }
  Autenticar(usuario: any) {
    let urlAuth = "http://127.0.0.1:8000/rest-auth/login/";
    
    let json = JSON.stringify(usuario);
    let params = json;
    let headers = new Headers({ "Content-Type": "application/json" });
    headers.append("Access-Control-Allow-Credentials", "true");
    headers.append("Access-Control-Allow-Origin", "*");
    headers.append("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");

    return this.http.post(urlAuth, params, { headers: headers, withCredentials: true })
    .map(data =>{
      console.log(data);
    });
  }
}
