import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DriveComponent } from './drive.component'; 

const routes: Routes = [
  {
    path: '',
    component: DriveComponent, 
    children: [
      {
        path: 'drive-upload', // child route path
        loadChildren: () =>
          import('./drive-upload/drive-upload.module').then(m => m.DriveUploadModule) // child route component that the router renders
      },
      {
        path: 'drive-read',
        loadChildren: () =>
          import('./drive-read/drive-read.module').then(m => m.DriveReadModule)
      },
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DriveRoutingModule {}
