import { Component, ViewChild } from '@angular/core';
import { NavController, Slides, ModalController } from 'ionic-angular';

import { ImagesService, SubjectService } from '../../providers/nodeJs/nodeJs';
import { YourSubjectsPage } from '../yourSubjects/yourSubjects';

@Component({
  selector: 'page-control',
  templateUrl: 'images.html'
})
export class ImagesPage {

  public modArray: Images = {
  _id: 0,
  filename: 'null',
  created: 'null',
  url: 'null',
  subjectId: 0
};
  
  public subId: number;
@ViewChild("slides") slide: Slides;
i: number;

constructor(public navCtrl: NavController, public modalCtrl: ModalController, public imgServ: ImagesService
  , public subServ: SubjectService) {

    this.chargeImages();

}



goToSubjects(){
  this.navCtrl.setRoot(YourSubjectsPage);
}

chargeImages(){

  this.subId = this.subServ.getId();
  this.imgServ.getImages().subscribe(
    (images: Array<Images>) => {

      this.modArray = images[0];
      if(this.slide.getActiveIndex()!=undefined){
        this.i = this.slide.getActiveIndex()
        console.log(this.i)
        this.modArray = images[this.i];
      }

      console.log(this.modArray)
    }, error => {


      console.log(error);
    })
}

}

class Images {
  _id: number;
  filename: String;
  created: String;
  url: String;
  subjectId: number
};