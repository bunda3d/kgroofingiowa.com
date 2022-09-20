// modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Material
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
// self-reference components
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
// Other
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCarouselModule } from '@ngmodule/material-carousel';
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
