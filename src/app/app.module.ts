import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

// Pages (Components)
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginPage } from "../pages/login/login";
import { NewsPage } from "../pages/news/news";
import { CartsPage } from "../pages/carts/carts";
import { SeeProductPage } from "../pages/see-product/see-product";
import { ProfilePage } from "../pages/profile/profile";

// Providers (Services)
import { NewsProvider } from '../providers/news/news';
import { ProductsProvider } from '../providers/products/products';
import { CartsProvider } from '../providers/carts/carts';

import { HttpClientModule } from '@angular/common/http';
import { IonicStorageModule } from '@ionic/storage';
import { UserProvider } from '../providers/user/user';


import {PipesModule} from "../pipes/pipes.module";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TabsPage,
    LoginPage,
    NewsPage,
    CartsPage,
    SeeProductPage,
    ProfilePage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    FormsModule,
    PipesModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TabsPage,
    LoginPage,
    NewsPage,
    CartsPage,
    SeeProductPage,
    ProfilePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    NewsProvider,
    ProductsProvider,
    CartsProvider,
    UserProvider,
  ]
})
export class AppModule {}
