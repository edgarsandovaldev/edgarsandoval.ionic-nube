import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EdgarSandovalPage } from './edgar-sandoval.page';

const routes: Routes = [
  {
    path: '',
    component: EdgarSandovalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EdgarSandovalPageRoutingModule {}
