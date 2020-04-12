import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatTreeModule } from '@angular/material/tree';

import { ProjectTreeComponent } from './project-tree.component';


@NgModule({
  declarations: [
    ProjectTreeComponent
  ],
  imports: [
    CommonModule,
    MatTreeModule,
    MatIconModule,
    MatProgressBarModule,
    MatButtonModule
  ],
  exports: [
    ProjectTreeComponent
  ]
})
export class ProjectTreeModule { }
