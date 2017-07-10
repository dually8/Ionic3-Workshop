import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import * as firebase from 'firebase/app';
import 'rxjs/add/operator/map';

@Injectable()
export class FirebaseProvider {

  public get isAuthenticated(): boolean {
    return !!this.afAuth.auth.currentUser;
  }

  public get currentUser(): firebase.User {
    return this.afAuth.auth && this.afAuth.auth.currentUser;
  }

  constructor(
    public db: AngularFireDatabase,
    public afAuth: AngularFireAuth) {
  }

  createAccount(email: string, password: string): Promise<firebase.User> {
    return new Promise((resolve, reject) => {
      this.afAuth.auth.createUserWithEmailAndPassword(email, password)
        .then((user) => {
          console.log('Created user');
          console.log(user);
          resolve(user);
        })
        .catch((err) => {
          console.error('Problem');
          console.error(err);
          reject(err);
        })
    })
  }

  loginWithEmail(email: string, password: string): Promise<any> {
    return new Promise((resolve, reject) => {
      this.afAuth.auth.signInWithEmailAndPassword(email, password)
        .then((user) => {
          console.log('logged in');
          resolve(user);
        })
        .catch((err) => {
          console.error(err);
          reject(err);
        })
    })
  }

  getPics(): Promise<string[]> {
    return new Promise((resolve, reject) => {
      if (!this.isAuthenticated) {
        reject('not authenticated');
        return;
      }
      let query = this.db.database.ref(`users/${this.afAuth.auth.currentUser.uid}/imgs`).orderByKey();

      query.once('value')
        .then((snapshot: firebase.database.DataSnapshot | any) => {
          console.log('Get pics snapshot success');
          let pics = [];
          snapshot.forEach((child) => {
            if (typeof child.val() === 'string') {
              pics.push(child.val());
            }
          });
          console.log(`Got ${pics.length} pics`);
          resolve(pics);
        }).catch((er) => {
          console.error(er);
          reject(er);
        });
    })
  }

  uploadPic(data: any): Promise<any> {
    return new Promise((resolve, reject) => {
      if (!this.isAuthenticated) {
        reject('not authenticated');
        return;
      }
      const user = this.currentUser.uid;
      const path = `users/${user}`;
      // let key = this.db.database.ref(path).child('imgs').key;
      this.db.database.ref(path).child('imgs').push(data)
        .then((res) => {
          console.log('successfully uploaded photo');
          console.log(res);
          resolve();
        })
        .catch((err) => {
          console.error(err);
          reject(err);
        })
    })
  }

}
