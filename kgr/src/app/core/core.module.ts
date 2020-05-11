import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ThemeService } from './services/theme.service';
import { UserService } from './services/user.service';

@NgModule({
	imports: [CommonModule, BrowserAnimationsModule],
	providers: [ThemeService, UserService],
	exports: [CommonModule]
})
export class CoreModule {}
