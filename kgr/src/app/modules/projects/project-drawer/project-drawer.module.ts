import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectTreeModule } from './../project-tree/project-tree.module';
import { ProjectDrawerComponent } from './project-drawer.component';


@NgModule({
  declarations: [
    ProjectDrawerComponent
  ],
  imports: [
    CommonModule,
    ProjectTreeModule
  ], 
  exports: [
    ProjectDrawerComponent
  ]
})
export class ProjectDrawerModule { }
