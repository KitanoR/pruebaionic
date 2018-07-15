import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProviderLoginProvider } from '../../providers/provider-login/provider-login';
import { HomePage } from "../home/home";
/**
 * Generated class for the PagesLoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pages-login',
  templateUrl: 'pages-login.html',
})
export class PagesLoginPage {
  username: string = '';
  password: string = '';
  constructor(public navCtrl: NavController, 
    private _login: ProviderLoginProvider,
    public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PagesLoginPage');
  }
  getlogin() {
    let data = {
      username: this.username,
      password: this.password
    }
    this._login.Autenticar(data)
      .subscribe(data => {
        this.navCtrl.setRoot(HomePage);
      })
  }

}
