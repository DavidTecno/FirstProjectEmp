import { Component } from '@angular/core';
import { App, NavController, ModalController } from 'ionic-angular';
import { SubjectService, ModuleService, UserService } from '../../providers/nodeJs/nodeJs';
import { ImagesPage } from '../images/images';

@Component({
  selector: 'page-home',
  templateUrl: 'yourSubjects.html'
})
export class YourSubjectsPage {

  public modArray: Array<Subjects> = [];
  public modId: number;
  public userId: number;

  constructor(public navCtrl: NavController, public appCtrl: App, public subServ: SubjectService,
    public modServ: ModuleService, public userServ: UserService, public modalCtrl: ModalController) {

    this.modId = this.modServ.getId();
    this.userId = this.userServ.getId();
    console.log("mod" + this.modId + "user" + this.userId)
    this.loadReclicler();


  }

  goToSubject(i: number){
    this.subServ.setId(i);
    this.navCtrl.setRoot(ImagesPage);
  }

  editSubject(i: number){
    console.log(i)
    this.modServ.setId(0);
    const editModal = this.modalCtrl.create("ModalSubject");
    editModal.onDidDismiss(dataAdd => {
      console.log(dataAdd);

      this.subServ.updateSubjects(i, dataAdd).subscribe(data=>{
        dataAdd = data;
      this.loadReclicler();

       }, error => {
        console.log(error);
      })
    });
    editModal.present();
  }

  deleteSubject(i: number){
    
      this.subServ.removeSubjects(i).subscribe(data=>{
        
      this.loadReclicler();


       }, error => {
        console.log(error);
      })

    
  }

  loadReclicler() {
    this.subServ.getUserSubjects(this.modId, this.userId).subscribe(
      (subjects: Array<Subjects>) => {
        this.modArray = subjects;
        console.log(subjects);
      }, error => {

        console.log(error);
      })
  }

}

class Subjects {
  _id: number;
  name: String;
  info: String;
  module: number;
  user: number;
};