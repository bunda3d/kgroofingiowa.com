import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about.component';
import { AboutRoutingModule } from './about-routing.module';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
	declarations: [AboutComponent],
	imports: [
		CommonModule,
		AboutRoutingModule,
		FlexLayoutModule,
		MatCardModule,
		MatListModule,
		MatIconModule
	],
	exports: [AboutComponent]
})
export class AboutModule {}
