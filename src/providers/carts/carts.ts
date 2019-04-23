import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Product } from "../../models/product.model";
import {Cart} from "../../models/cart.model";

/*
  Generated class for the CartsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CartsProvider {

  products: Product[] = [];

  // @ts-ignore
  carts: Cart = {
    name:"",
    description: "",
    address: "",
    userId: 1,
    products: this.products,
  };

  constructor(public http: HttpClient, public storage: Storage) {
    this.loaderCarts();
  }

  addProduct(item:Product) {
    this.products.push( item );
    // @ts-ignore
    this.carts.products = this.products;
    this.saveCarts();
  }

  removeCarts(item:Product) {
    // @ts-ignore
    this.products = this.products.filter( listData => {
      return listData.id !== item.id;
    });
    // @ts-ignore
    this.carts.products = this.products;
    this.saveCarts();
  }

  saveCarts() {
    localStorage.setItem('carts', JSON.stringify( this.carts ) );
  }

  loaderCarts() {
    if(localStorage.getItem('carts')) {
      this.carts = JSON.parse(localStorage.getItem('carts'));
      // @ts-ignore
      this.products = this.carts.products;
    }
  }

}
