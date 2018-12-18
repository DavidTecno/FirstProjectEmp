import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModalSubjectAdd } from './model';

@NgModule({
  declarations: [
    ModalSubjectAdd,
  ],
  imports: [
    IonicPageModule.forChild(ModalSubjectAdd),
  ],
})
export class ModelPageModule {}
