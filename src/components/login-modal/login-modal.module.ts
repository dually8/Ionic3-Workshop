import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { LoginModal } from './login-modal';

@NgModule({
  declarations: [
    LoginModal,
  ],
  imports: [
    IonicModule,
  ],
  exports: [
    LoginModal
  ]
})
export class LoginModalComponentModule {}
