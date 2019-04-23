import {DateTime} from "ionic-angular";

export class Product {


  id?:number;
  code:string;
  image:string;
  name:string;
  quantity:number;
  createdAt:DateTime;
  updatedAt:DateTime;

  constructor(){

  }
}
