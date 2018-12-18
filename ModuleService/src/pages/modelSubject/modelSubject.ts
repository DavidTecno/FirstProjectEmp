import { Component } from '@angular/core';
import { IonicPage, NavController, ViewController, App} from 'ionic-angular';

import { ModuleService, UserService } from '../../providers/nodeJs/nodeJs';

/**
 * Generated class for the ModelPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-model',
  templateUrl: 'modelSubject.html',
})
export class ModalSubject {
  myname;
  myinfo;
  myimage;
  public modId: number;
  public userId: number;

  goBack(){
    this.app.goBack();
  }

  constructor(public navCtrl: NavController, public viewCtrl: ViewController, public app: App,
     public modServ: ModuleService, public userServ: UserService) {
      this.modId = this.modServ.getId();
      this.userId = this.userServ.getId();
      
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModelAdd');
  }

  dismiss() {  
    let data = {};  
    if(this.modId==0){
      data = { 
        _id: 0,
        name: this.myname,
        info: this.myinfo,
        image: this.myimage,
        user: this. userId
      };
    } else {
      data = { 
        _id: 0,
        name: this.myname,
        info: this.myinfo,
        image: this.myimage,
        module: this.modId,
        user: this. userId
      };
    }
    console.log(data);
    this.viewCtrl.dismiss(data);
  }
  

}
