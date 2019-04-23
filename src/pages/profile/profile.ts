import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserProvider } from "../../providers/user/user";
import {User} from "../../models/User.model";

/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  user:User;

  constructor(public navCtrl: NavController, public navParams: NavParams, public userProvider: UserProvider) {
    this.loadInf();
  }

  ionViewDidLoad() {

  }

  loadInf() {
    this.userProvider.first().subscribe(
      (data) => {
        // @ts-ignore
        this.user = data;
      },
      (error) =>{
        console.error(error);
      }
    );
  }

}
