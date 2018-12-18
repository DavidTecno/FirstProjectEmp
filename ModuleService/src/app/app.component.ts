import { Component } from '@angular/core';
import { Platform, ModalController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AlertController } from 'ionic-angular';

import { HomePage } from '../pages/home/home';
import { ModulesPage } from '../pages/modules/modules';
import { UserService } from '../providers/nodeJs/nodeJs';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;

  public modArray:Array<Users> = [];

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, public alert: AlertController,
    public modalCtrl: ModalController, public userServ: UserService) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  SignOut(){
    this.rootPage = HomePage;
  }

  SignUp(){
      const addModal = this.modalCtrl.create("LogSignPage");
      addModal.onDidDismiss(dataAdd => {
        if(dataAdd.username!=undefined && dataAdd.password!=undefined && dataAdd.email!=undefined){
        
          this.userServ.addUsers(dataAdd).subscribe(data=>{
            console.log("Los datos llegan: "+JSON.stringify(dataAdd));
            this.rootPage = ModulesPage;
            }, error => {
            console.log(error);
          })
        } else{
          console.log("user: " + dataAdd.username + " y password: "+ dataAdd.password)
      console.log("No puedes dejar inputs sin rellenar")
        }
        
         
      });
      addModal.present();
  }

  SignIn(){
    const addModal = this.modalCtrl.create("LogSignPage");
    addModal.onDidDismiss(dataAdd => {
      

      if(dataAdd.username!=undefined && dataAdd.password!=undefined){
        this.userServ.getUsers().subscribe(data=>{
          
          for(var i = 0; i < data.length; i++){
            if(data[i].username==dataAdd.username){
              this.userServ.setId(data[i]._id);
              this.rootPage = ModulesPage;
            }
          }
          
         }, error => {
          console.log(error);
        })
     
      
    }else{
      console.log("user: " + dataAdd.username + " y password: "+ dataAdd.password)
      console.log("No puedes dejar ni user ni password vacio")
    }
  });
    addModal.present();
  }

}


export class Users {
  _id: number;
  username: String;
  email: String;
  password: String;
};
