import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
// Material
import { MatLegacyCardModule as MatCardModule } from '@angular/material/legacy-card';
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatLegacyListModule as MatListModule } from '@angular/material/legacy-list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatLegacyCheckboxModule as MatCheckboxModule } from '@angular/material/legacy-checkbox';
import { MatLegacyFormFieldModule as MatFormFieldModule } from '@angular/material/legacy-form-field';
import { MatLegacyInputModule as MatInputModule } from '@angular/material/legacy-input';
// self-reference components
import { ProjectComponent } from './project.component';
import { ProjectRoutingModule } from './project-routing.module';
import { ProjectService } from 'src/app/core/services/project.service';
import { ProjectsListComponent } from './projects-list/projects-list.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { AddProjectComponent } from './add-project/add-project.component';

// Other
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
	declarations: [
		ProjectComponent,
		ProjectsListComponent,
		ProjectDetailsComponent,
		AddProjectComponent
	],
	imports: [
		CommonModule,
		FormsModule,
		ReactiveFormsModule,
		HttpClientModule,
		FlexLayoutModule,
		MatFormFieldModule,
		MatInputModule,
		MatCardModule,
		MatButtonModule,
		MatDividerModule,
		MatIconModule,
		MatListModule,
		MatToolbarModule,
		MatCheckboxModule,
		ProjectRoutingModule

		// RouterModule.forChild(projectRoutes)
	],
	providers: [ProjectService]
})
export class ProjectModule {}
