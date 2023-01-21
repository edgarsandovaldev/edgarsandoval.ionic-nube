import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MiExperienciaPageRoutingModule } from './mi-experiencia-routing.module';

import { MiExperienciaPage } from './mi-experiencia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MiExperienciaPageRoutingModule
  ],
  declarations: [MiExperienciaPage]
})
export class MiExperienciaPageModule {}
