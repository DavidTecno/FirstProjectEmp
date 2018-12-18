import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModalSubject } from './modelSubject';

@NgModule({
  declarations: [
    ModalSubject,
  ],
  imports: [
    IonicPageModule.forChild(ModalSubject),
  ],
})
export class ModelPageModule {}
