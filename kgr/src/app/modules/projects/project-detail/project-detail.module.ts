import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

import { ProjectDrawerModule } from './../project-drawer/project-drawer.module';
import { ProjectDetailRoutingModule } from './project-detail-routing.module';
import { ProjectDetailComponent } from './project-detail.component';


@NgModule({
  declarations: [
    ProjectDetailComponent
  ],
  imports: [
    CommonModule,
    FlexModule,
    ProjectDetailRoutingModule,
    ProjectDrawerModule,
    MatCardModule,
    MatButtonModule
  ]
})
export class ProjectDetailModule { }
