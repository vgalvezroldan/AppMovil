import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ForgottenPageRoutingModule } from './forgotten-routing.module';

import { ForgottenPage } from './forgotten.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ForgottenPageRoutingModule
  ],
  declarations: [ForgottenPage]
})
export class ForgottenPageModule {}
