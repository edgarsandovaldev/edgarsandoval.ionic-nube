import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EdgarSandovalPageRoutingModule } from './edgar-sandoval-routing.module';

import { EdgarSandovalPage } from './edgar-sandoval.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EdgarSandovalPageRoutingModule
  ],
  declarations: [EdgarSandovalPage]
})
export class EdgarSandovalPageModule {}
