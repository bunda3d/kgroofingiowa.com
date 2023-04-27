import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DriveUploadComponent } from './drive-upload.component'

const routes: Routes = [
  {
    path: '',
    component: DriveUploadComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DriveUploadRoutingModule {}
