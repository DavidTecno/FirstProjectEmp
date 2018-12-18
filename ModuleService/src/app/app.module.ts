import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { ModulesPage } from '../pages/modules/modules';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { YourSubjectsPage } from '../pages/yourSubjects/yourSubjects';
import { AllSubjectsPage } from '../pages/allSubjects/allSubjects';
import { ImagesPage } from '../pages/images/images';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { IonicStorageModule } from '@ionic/storage';
import { SQLite } from '@ionic-native/sqlite';
import { DatabaseProvider } from '../providers/database/database';
import { ModuleService, SubjectService, UserService, ImagesService } from '../providers/nodeJs/nodeJs';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    MyApp,
    ModulesPage,
    HomePage,
    TabsPage,
    YourSubjectsPage,
    AllSubjectsPage,
    ImagesPage
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    IonicStorageModule.forRoot(),
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ModulesPage,
    HomePage,
    TabsPage,
    YourSubjectsPage,
    AllSubjectsPage,
    ImagesPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    SQLite,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DatabaseProvider,
    ModuleService,
    SubjectService,
    UserService,
    ImagesService
  ]
})
export class AppModule {}
