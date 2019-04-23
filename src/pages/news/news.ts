import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NewsProvider } from "../../providers/news/news";

/**
 * Generated class for the NewsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-news',
  templateUrl: 'news.html',
})
export class NewsPage {

  items;

  constructor(public navCtrl: NavController, public navParams: NavParams, public newsProvide:NewsProvider) {
  }

  ionViewDidLoad() {
    this.newsProvide.getNews().subscribe(
      (data) => {
          this.items = data;
      },
      (error) =>{
        console.error(error);
      }
    );
  }

  getItems(ev) {
    // Reset items back to all of the items
    this.ionViewDidLoad();

    // set val to the value of the ev target
    var val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.title.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

}
