import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectDrawerComponent } from './../project-drawer/project-drawer.component';
import { ProjectDetailComponent } from './../project-detail/project-detail.component';


const routes: Routes = [
  {
    path: '',
    component: ProjectDetailComponent
  },
  {
    path: '',
    component: ProjectDrawerComponent,
    outlet: 'project-drawer'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectListRoutingModule { }
