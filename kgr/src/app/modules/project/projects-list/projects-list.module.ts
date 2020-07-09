import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsListRoutingModule } from './projects-list-routing.module';
import { ProjectsListComponent } from './projects-list.component';
import { FormsModule } from '@angular/forms';

@NgModule({
	declarations: [ProjectsListComponent],
	imports: [CommonModule, ProjectsListRoutingModule, FormsModule]
})
export class ProjectsListModule {}
