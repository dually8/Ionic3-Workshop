import { Component } from '@angular/core';
import { AlertController, LoadingController, IonicPage, NavController, NavParams } from 'ionic-angular';
import { FirebaseProvider } from '../../providers/firebase/firebase';

@IonicPage()
@Component({
  selector: 'page-view',
  templateUrl: 'view.html',
})
export class ViewPage {

  myPhotos: string[];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController,
    public fbProv: FirebaseProvider
  ) {
    this.myPhotos = [];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ViewPage');

    let loading = this.loadingCtrl.create({
      content: 'Getting photos...'
    });
    loading.present();

    if (this.fbProv.isAuthenticated) {
      console.log(this.fbProv.currentUser.email);
      this.getPhotos()
        .then(() => {
          loading.dismiss();
        })
        .catch((er) => {
          loading.dismiss();
          this.alertCtrl.create({
            title: 'Error',
            subTitle: er,
            buttons: [ 'OK' ]
          });
        })
    } else {
      console.log('no current user');
      loading.dismiss();
    }
  }

  getPhotos(): Promise<any> {
    return new Promise((resolve, reject) => {
      // todo 6: get the photos from firebase
    });
  }

}
