import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
// Material
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
// self-reference components
import { ProjectComponent } from './project.component';
import { ProjectRoutingModule } from './project-routing.module';
import { ProjectService } from 'src/app/core/services/project.service';
// Other
import { FlexLayoutModule } from '@angular/flex-layout';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { ProjectsListComponent } from './projects-list/projects-list.component';

@NgModule({
	declarations: [
		ProjectComponent,
		ProjectDetailsComponent,
		ProjectsListComponent,
		ProjectDetailsComponent
	],
	imports: [
		BrowserModule,
		CommonModule,
		FormsModule,
		HttpClientModule,
		FlexLayoutModule,
		MatCardModule,
		MatButtonModule,
		MatDividerModule,
		MatIconModule,
		MatListModule,
		ProjectRoutingModule
	],
	providers: [ProjectService],
	exports: [ProjectComponent]
})
export class ProjectModule {}
