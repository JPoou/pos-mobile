import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SeeProductPage } from './see-product';

@NgModule({
  declarations: [
    SeeProductPage,
  ],
  imports: [
    IonicPageModule.forChild(SeeProductPage),
  ],
})
export class SeeProductPageModule {}
