import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { NewsPage } from "../news/news";
import { CartsPage } from "../carts/carts";
import { ProfilePage } from "../profile/profile";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = CartsPage;
  tab3Root = NewsPage;
  tab4Root = ProfilePage;

  constructor() {

  }
}
