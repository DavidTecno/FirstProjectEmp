import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';

import { YourSubjectsPage } from '../yourSubjects/yourSubjects';
import { AllSubjectsPage } from '../allSubjects/allSubjects';
import { SubjectService, ImagesService } from '../../providers/nodeJs/nodeJs';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = YourSubjectsPage;
  tab2Root = AllSubjectsPage;

  constructor(public navCtrl: NavController, public modalCtrl: ModalController,
     public subServ: SubjectService, public imgServ: ImagesService) {

  }

  addSubject(){
    const addModal = this.modalCtrl.create("ModalSubject");
    addModal.onDidDismiss(dataAdd => {
      console.log(dataAdd);
      this.subServ.addSubjects(dataAdd).subscribe(data=>{

        //Not Implement yet
        /*this.subServ.getSubjects().subscribe(
          (subjects: Array<Subjects>) => {
            
      
            for(var i = 0; i<subjects.length;i++){
              if(dataAdd.name==subjects[i].name)
              this.idSub = subjects[i]._id;
            }

            this.imgServ.postImages(dataAdd, this.idSub).subscribe(data => {
        

            }, error => {
             console.log(error);
           })
      
          }, error => {
      
      
            console.log(error);
          })
          */

       }, error => {
        console.log(error);
      });
      
     
    
    });

    addModal.present();
  }

}

// class Subjects {
//   _id: number;
//   name: String;
//   info: String;
//   module: number;
//   user: number;
// };
