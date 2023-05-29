// modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Material
import { MatLegacyCardModule as MatCardModule } from '@angular/material/legacy-card';
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatLegacyListModule as MatListModule } from '@angular/material/legacy-list';
// self-reference components
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
// Other
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCarouselModule } from '@ngbmodule/material-carousel';
// Orig carousel
//import { MatCarouselModule } from '@ngmodule/material-carousel';
import { ScrollTopComponent } from '../scroll-top/scroll-top.component';

@NgModule({
	declarations: [HomeComponent],
	imports: [
		CommonModule,
		HomeRoutingModule,
		MatCardModule,
		MatDividerModule,
		MatButtonModule,
		MatIconModule,
		MatListModule,
		FlexLayoutModule,
		MatCarouselModule.forRoot()
	],
	exports: []
})
export class HomeModule {}
