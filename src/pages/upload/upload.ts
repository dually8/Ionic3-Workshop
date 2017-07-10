import { Component } from '@angular/core';
import {
  ActionSheetController,
  IonicPage,
  LoadingController,
  Modal,
  ModalController,
  NavController,
  NavParams,
  ToastController
} from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { FirebaseProvider } from '../../providers/firebase/firebase';
import { LoginModal } from '../../components/login-modal/login-modal';


@IonicPage()
@Component({
  selector: 'page-upload',
  templateUrl: 'upload.html',
})
export class UploadPage {

  photo: string;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public modalCtrl: ModalController,
    public actionSheetCtrl: ActionSheetController,
    public loadingCtrl: LoadingController,
    public toastCtrl: ToastController,
    private fbProv: FirebaseProvider,
    private camera: Camera,
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UploadPage');
    if (this.fbProv.isAuthenticated) {
      console.log(this.fbProv.currentUser.email);
      this.toastCtrl.create({
        duration: 3000,
        message: `${this.fbProv.currentUser.email} is logged in.`,
        position: 'middle'
      }).present();
    } else {
      console.log('no current user');
      this.showLogin();
    }
  }

  showLogin() {
    let loginModal = this.modalCtrl.create(LoginModal)
    loginModal.present();
  }

  openOptions(): void {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Select One',
      buttons: [
        {
          text: 'Take Photo',
          handler: () => {
            this.takePic();
          }
        },
        {
          text: 'Select Photo',
          handler: () => {
            this.openGallery();
          }
        },
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });

    actionSheet.present();
  }

  openGallery(): void {
    const opts: CameraOptions = {
      // Some common settings are 20, 50, and 100
      quality: 1,
      destinationType: this.camera.DestinationType.DATA_URL,
      // In this app, dynamically set the picture source, Camera or photo gallery
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      allowEdit: false,
      correctOrientation: true  // Corrects Android orientation quirks
    };
    this.getPicture(opts);
  }

  takePic(): void {
    const opts: CameraOptions = {
      // Some common settings are 20, 50, and 100
      quality: 1,
      destinationType: this.camera.DestinationType.DATA_URL,
      // In this app, dynamically set the picture source, Camera or photo gallery
      sourceType: this.camera.PictureSourceType.CAMERA,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      saveToPhotoAlbum: false,
      allowEdit: false,
      correctOrientation: true  // Corrects Android orientation quirks
    };

    this.getPicture(opts);
  }

  uploadPic(): void {
    // todo 5: create upload pic function
    if (!this.photo) {
      return;
    }
    let loading = this.loadingCtrl.create({
      content: 'Uploading photo...'
    });
    loading.present();

    this.fbProv.uploadPic(this.photo)
      .then((res) => {
        loading.dismiss();
        this.toastCtrl.create({
          duration: 3000,
          message: 'Uploaded photo successfully!',
          position: 'middle'
        }).present();
      }).catch((er) => {
        loading.dismiss();
        this.toastCtrl.create({
          duration: 3000,
          message: 'Failed to upload photo',
          position: 'middle'
        }).present();
      });
  }

  private getPicture(opts: CameraOptions): void {
    this.camera.getPicture(opts)
      .then((imgData) => {
        this.photo = 'data:image/jpeg;base64,' + imgData;
      }, (er) => {
        console.error(er);
      });
  }

}
