import { Component } from '@angular/core';
import { IonicPage, NavController, ViewController, App} from 'ionic-angular';

/**
 * Generated class for the ModelPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-model',
  templateUrl: 'logSign.html',
})
export class LogSignPage {
  myuser;
  myemail;
  mypassword;

  goBack(){
    this.app.goBack();
  }

  constructor(public navCtrl: NavController, public viewCtrl: ViewController, public app: App) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Log/Sign');
  }

  dismiss() {    
    let data = { 
      username: this.myuser,
      email: this.myemail,
      password: this.mypassword
 
    };
    this.viewCtrl.dismiss(data);
  }
  

}
