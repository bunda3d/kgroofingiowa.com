import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddProjectComponent } from './add-project.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddProjectRoutingModule } from './add-project-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ProjectService } from 'src/app/core/services/project.service';
import { MatInputModule } from '@angular/material/input';

@NgModule({
	declarations: [],
	imports: [
		FormsModule,
		ReactiveFormsModule,
		BrowserAnimationsModule,
		CommonModule,
		HttpClientModule,
		ProjectService,
		MatButtonModule,
		MatFormFieldModule,
		MatInputModule,
		AddProjectRoutingModule,
		AddProjectComponent
	],
	exports: []
})
export class AddProjectModule {}
