import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';

import { TabsPage } from '../tabs/tabs';
import { ModuleService } from '../../providers/nodeJs/nodeJs';

@Component({
  selector: 'page-control',
  templateUrl: 'modules.html'
})
export class ModulesPage {

  public modArray:Array<Modules> = [];
  public subId: number;

  constructor(public navCtrl: NavController, public modalCtrl: ModalController, public modServ: ModuleService) {

    this.loadModules();
    console.log("hola modules")
    
  }

  loadModules(){
    this.modServ.getModules().subscribe(
      (modules: Array<Modules>) => {
        this.modArray = modules;      
      }, error => {
        
      
        console.log(error);
      })
  }

  addModule(){
    this.modServ.setId(0);
    const addModal = this.modalCtrl.create("ModalSubjectAdd");
    addModal.onDidDismiss(dataAdd => {
      console.log(dataAdd);
      
      this.modServ.addModules(dataAdd).subscribe(data=>{
        dataAdd = data;
      this.loadModules();


       }, error => {
        console.log(error);
      })
    });
    addModal.present();
  }

  editModule(i: number){
    console.log(i)
    this.modServ.setId(0);
    const editModal = this.modalCtrl.create("ModalSubjectAdd");
    editModal.onDidDismiss(dataAdd => {
      console.log(dataAdd);

      this.modServ.updateModules(i, dataAdd).subscribe(data=>{
        dataAdd = data;
      this.loadModules();

       }, error => {
        console.log(error);
      })
    });
    editModal.present();
  }

  deleteModule(i: number){
    this.modServ.setId(0);
    
      this.modServ.removeModules(i).subscribe(data=>{
        
      this.loadModules();


       }, error => {
        console.log(error);
      })

    
  }

  goToSubjects(i: number){
    this.modServ.setId(i);
    this.navCtrl.push(TabsPage);
  }

}

class Modules {
  _id: number;
  name: String;
  info: String
};