import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { UploadPage } from '../pages/upload/upload';
import { ViewPage } from '../pages/view/view';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { FirebaseProvider } from '../providers/firebase/firebase';
import { LoginModal } from '../components/login-modal/login-modal';
import { Camera } from '@ionic-native/camera';

export const fbConfig = {
  apiKey: "AIzaSyDI2FYEPSqyqgIvRmp0aGrz8rBi79tg1GI",
  authDomain: "ionic2workshop.firebaseapp.com",
  databaseURL: "https://ionic2workshop.firebaseio.com",
  projectId: "ionic2workshop",
  storageBucket: "ionic2workshop.appspot.com",
  messagingSenderId: "246753421117"
};

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    HomePage,
    TabsPage,
    UploadPage,
    ViewPage,
    LoginModal,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(fbConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    HomePage,
    TabsPage,
    UploadPage,
    ViewPage,
    LoginModal,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    FirebaseProvider,
    Camera,
  ]
})
export class AppModule { }
