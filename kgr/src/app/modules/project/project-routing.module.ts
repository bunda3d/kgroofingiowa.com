import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectComponent } from './project.component';
// local imports
import { ProjectsListComponent } from './projects-list/projects-list.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { AddProjectComponent } from './add-project/add-project.component';

// NOTE: 'PROJECTS' is routed to projectslist component, not PROJECTS component
const projectRoutes: Routes = [
	{
		path: 'project',
		component: ProjectComponent,
		children: [
			{ path: 'projects', component: ProjectsListComponent },
			{ path: 'projects/:id', component: ProjectDetailsComponent },
			{ path: 'add', component: AddProjectComponent }
		]
	}
];

@NgModule({
	imports: [RouterModule.forChild(projectRoutes)],
	exports: [RouterModule]
})
export class ProjectRoutingModule {}
