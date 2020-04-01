import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { KitchensinkComponent } from './kitchensink.component';

const routes: Routes = [
  {
    path: '',
    component: KitchensinkComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KitchensinkRoutingModule { }
