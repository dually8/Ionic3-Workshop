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
        this.fbProv.loginWithEmail(this.email, this.password)
            .then(() => {
                // show success
                this.viewCtrl.dismiss()
                    .then(() => {
                        this.toastCtrl.create({
                            duration: 3000,
                            message: 'Login successful! :)'
                        }).present();
                    });
            }).catch((er) => {
                // show error
                this.toastCtrl.create({
                    duration: 3000,
                    message: 'Login failed'
                }).present();
            });
    }

    createAccount(): void {
        // todo 4: create make account function
        this.fbProv.createAccount(this.email, this.password)
            .then(() => {
                // show success
                this.toastCtrl.create({
                    duration: 3000,
                    message: 'Created account! :)'
                }).present();
            }).catch((er) => {
                // show error
                this.toastCtrl.create({
                    duration: 3000,
                    message: 'Create account failed :('
                }).present();
            });
    }

    dismiss(): void {
        this.viewCtrl.dismiss();
    }

}
