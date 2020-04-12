import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectListRoutingModule } from './project-list-routing.module';
import { ProjectListComponent } from './project-list.component';


@NgModule({
  declarations: [ProjectListComponent],
  imports: [
    CommonModule,
    ProjectListRoutingModule
  ]
})
export class ProjectListModule { }
