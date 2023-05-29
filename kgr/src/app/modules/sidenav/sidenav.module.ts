import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

// Other
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
// Material
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatLegacyListModule as MatListModule } from '@angular/material/legacy-list';
import { MatLegacyMenuModule as MatMenuModule } from '@angular/material/legacy-menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatLegacySlideToggleModule as MatSlideToggleModule } from '@angular/material/legacy-slide-toggle';
import { MatToolbarModule } from '@angular/material/toolbar';
// Component imports
import { SidenavComponent } from './sidenav.component';
import { ScrollTopComponent } from '../scroll-top/scroll-top.component';

@NgModule({
	declarations: [SidenavComponent],
	imports: [
		CommonModule,
		FlexLayoutModule,
		MatButtonModule,
		MatGridListModule,
		MatIconModule,
		MatListModule,
		MatMenuModule,
		MatSidenavModule,
		MatSlideToggleModule,
		MatToolbarModule,
		RouterModule
	],
	exports: [SidenavComponent]
})
export class SidenavModule {}
