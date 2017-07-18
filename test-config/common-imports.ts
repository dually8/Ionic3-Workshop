import { HttpModule, RequestOptions } from '@angular/http';
import { MockBackend } from '@angular/http/testing';
import {
  ActionSheetController,
  AlertController,
  App,
  Config,
  Form,
  LoadingController,
  ModalController,
  NavController,
  NavParams,
  Platform,
  ToastController,
} from 'ionic-angular';
import { Camera } from '@ionic-native/camera';
import {
  CameraMock,
  ConfigMock,
  NavMock,
  PlatformMock,
  StatusBarMock,
  SplashScreenMock,
  NavParamsMock
} from './mocks-ionic';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { FirebaseProvider } from '../src/providers/firebase/firebase';
import { AngularFireAuthModule } from "angularfire2/auth";
import { AngularFireDatabaseModule } from "angularfire2/database";
import { AngularFireModule } from "angularfire2/angularfire2";
import { fbConfig } from '../src/app/app.module';

/**
 * Because promises take a long time some times
 */
jasmine.DEFAULT_TIMEOUT_INTERVAL = 20000;

export const baseProviders: Array<any> = [
  ActionSheetController,
  AlertController,
  FirebaseProvider,
  Form,
  LoadingController,
  ModalController,
  NavController,
  ToastController,
  { provide: NavParams, useValue: NavParamsMock },
  { provide: Camera, useValue: CameraMock },
];

export const baseImports: Array<any> = [
  AngularFireAuthModule,
  AngularFireDatabaseModule,
  AngularFireModule.initializeApp(fbConfig),
  HttpModule,
];
