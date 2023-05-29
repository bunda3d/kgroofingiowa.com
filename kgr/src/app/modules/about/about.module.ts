import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// self-reference components
import { AboutComponent } from './about.component';
import { AboutRoutingModule } from './about-routing.module';
// Material
import { MatLegacyCardModule as MatCardModule } from '@angular/material/legacy-card';
import { MatLegacyListModule as MatListModule } from '@angular/material/legacy-list';
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
