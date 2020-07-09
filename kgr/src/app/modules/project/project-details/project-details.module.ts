import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectDetailsRoutingModule } from './project-details-routing.module';
import { ProjectDetailsComponent } from './project-details.component';
import { FormsModule } from '@angular/forms';

@NgModule({
	declarations: [ProjectDetailsComponent],
	imports: [CommonModule, ProjectDetailsRoutingModule, FormsModule]
})
export class ProjectDetailsModule {}
