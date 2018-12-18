import { Component } from '@angular/core';
import { App, NavController } from 'ionic-angular';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public appCtrl: App) {
    
  }

}
