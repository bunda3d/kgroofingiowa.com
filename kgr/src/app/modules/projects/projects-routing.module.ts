import { ProjectsComponent } from './projects.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    component: ProjectsComponent,
    children: [
      {
        path: '',
        loadChildren: './project-list/project-list.module#ProjectListModule'
      },
      {
        path: ':ProjectId',
        loadChildren: './project-detail/project-detail.module#ProjectDetailModule'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectsRoutingModule { }
