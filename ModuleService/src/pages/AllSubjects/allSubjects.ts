import { Component } from '@angular/core';
import { App, NavController } from 'ionic-angular';
import { ImagesPage } from '../images/images';
import { SubjectService, ModuleService, UserService } from '../../providers/nodeJs/nodeJs';

@Component({
  selector: 'page-home',
  templateUrl: 'allSubjects.html'
})
export class AllSubjectsPage {

  public modArray: Array<Subjects> = [];
  public modId: number;
  public userId: number;

  constructor(public navCtrl: NavController, public appCtrl: App, public subServ: SubjectService,
    public modServ: ModuleService, public userServ: UserService) {

    this.modId = this.modServ.getId();
    this.loadReclicler();


  }

  loadReclicler() {
    this.subServ.getModuleSubjects(this.modId).subscribe(
      (subjects: Array<Subjects>) => {
        this.modArray = subjects;
        console.log(subjects);
      }, error => {

        console.log(error);
      })
  }

  goToSubject(i: number){
    this.subServ.setId(i);
    this.navCtrl.setRoot(ImagesPage);
  }

}

class Subjects {
  _id: number;
  name: String;
  info: String;
  module: number;
  user: number;
};