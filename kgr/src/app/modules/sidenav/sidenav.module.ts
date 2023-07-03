import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

// Other
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
// Material
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
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
