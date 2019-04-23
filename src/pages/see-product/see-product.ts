import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Product } from "../../models/product.model";
import { UserProvider } from "../../providers/user/user";

/**
 * Generated class for the SeeProductPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-see-product',
  templateUrl: 'see-product.html',
})
export class SeeProductPage {

  item:Product;

  constructor(public navCtrl: NavController, public navParams: NavParams, public userProvider: UserProvider){
     this.item = this.navParams.get('item');
  }

  ionViewDidLoad() {
    console.log(this.item)
  }

}
