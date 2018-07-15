import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PagesLoginPage } from './pages-login';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    CommonModule,
    PagesLoginPage,
  ],
  imports: [
    IonicPageModule.forChild(PagesLoginPage),
  ],
})
export class PagesLoginPageModule {}
