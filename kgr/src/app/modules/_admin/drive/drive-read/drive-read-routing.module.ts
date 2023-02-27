import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DriveReadComponent } from './drive-read.component'

const routes: Routes = [
  {
    path: '',
    component: DriveReadComponent
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DriveReadRoutingModule { }
