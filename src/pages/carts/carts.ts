import { Component } from '@angular/core';
import {IonicPage, ItemSliding, NavController, NavParams} from 'ionic-angular';
import { CartsProvider } from "../../providers/carts/carts";
import { Product } from "../../models/product.model";

/**
 * Generated class for the CartsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-carts',
  templateUrl: 'carts.html',
})
export class CartsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public cartsProvide: CartsProvider) {

  }

  ionViewDidLoad() {

  }

  remove(item:Product, slidingItem: ItemSliding) {
    slidingItem.close();
    this.cartsProvide.removeCarts(item);
  }

}
