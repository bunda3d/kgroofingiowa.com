import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// self-reference components
import { AboutComponent } from './about.component';
import { AboutRoutingModule } from './about-routing.module';
// Material
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
// Other
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
	declarations: [AboutComponent],
	imports: [
		CommonModule,
		AboutRoutingModule,
		FlexLayoutModule,
		MatCardModule,
		MatListModule,
		MatToolbarModule,
		MatIconModule
	],
	exports: [AboutComponent]
})
export class AboutModule {}
