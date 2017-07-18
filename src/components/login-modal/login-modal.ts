import { Component } from '@angular/core';
import {
  ToastController,
  ViewController,
} from 'ionic-angular';
import { FirebaseProvider } from '../../providers/firebase/firebase';

@Component({
  selector: 'login-modal',
  templateUrl: 'login-modal.html'
})
export class LoginModal {

  email: string;
  password: string;

  constructor(
    private viewCtrl: ViewController,
    private toastCtrl: ToastController,
    private fbProv: FirebaseProvider,
  ) {
    this.email = '';
    this.password = '';
  }

  login(): void {
        // todo 3: create login function
    }

    createAccount(): void {
        // todo 4: create make account function
    }

    dismiss(): void {
        this.viewCtrl.dismiss();
    }

}
