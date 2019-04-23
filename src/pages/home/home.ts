import {Component} from '@angular/core';
import {AlertController, ItemSliding, NavController} from 'ionic-angular';
import {ProductsProvider} from "../../providers/products/products";
import { Product } from "../../models/product.model";
import { SeeProductPage } from "../see-product/see-product";
import { CartsProvider } from "../../providers/carts/carts";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  items:Product[] = [];
  textSearch = '';

  constructor(public navCtrl: NavController, public productsProvider:ProductsProvider, public cartsProvide: CartsProvider, private alertCtrl: AlertController) {
    this.initializeItems();
  }

  initializeItems() {
    this.productsProvider.get().subscribe(
      (data) => {
        // @ts-ignore
        this.items = data;
      },
      (error) =>{
        console.error(error);
      }
    );
  }

  addToCart(item:Product, slidingItem: ItemSliding ) {
    slidingItem.close();
    const alert = this.alertCtrl.create({
      title: 'Cantidad',
      message: 'Cantidad de productos a comprar',
      inputs: [{
        name: 'quantity',
        placeholder: ''
      }],
      buttons: [{
        text: 'Cancelar'
      },{
        text: 'Agregar',
        handler: data => {
          item.quantity = (data.quantity == "") ? 1 : data.quantity;
          this.cartsProvide.addProduct(item);
        }
      }]
    });
    alert.present();
  }

  seeDetail(item:Product) {
    this.navCtrl.push( SeeProductPage, {
      item: item
    });
  }

  searchProduct(event) {
      this.textSearch = event.value;
  }

}

