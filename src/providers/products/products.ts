import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Product} from "../../models/product.model";

/*
  Generated class for the ProductsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ProductsProvider {

  constructor(public http: HttpClient) {
  }

  get() {
    return this.http.get('http://localhost:8080/api/products');
  }

  first(item:Product) {
      return this.http.get('http://localhost:8080/api/products/'+item.id).subscribe(
        (data) => {
          return data.valueOf();
        },
        (error) =>{
          console.error(error);
        }
      );
  }

}
