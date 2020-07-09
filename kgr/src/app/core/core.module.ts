import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ThemeService } from './services/theme.service';
import { ProjectService } from './services/project.service';

@NgModule({
	imports: [CommonModule, BrowserAnimationsModule],
	providers: [ThemeService, ProjectService],
	exports: [CommonModule]
})
export class CoreModule {}
