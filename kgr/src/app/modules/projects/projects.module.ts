import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterModule } from '@angular/router';
import { ProjectsComponent } from './projects.component';
import { ProjectsRoutingModule } from './projects-routing.module';

@NgModule({
	declarations: [ProjectsComponent],
	imports: [CommonModule, RouterModule, MatSidenavModule, MatButtonModule, MatIconModule],
	exports: [ProjectsComponent]
})
export class ProjectsModule {}
