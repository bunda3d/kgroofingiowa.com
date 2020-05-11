// modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCarouselModule } from '@ngmodule/material-carousel';
import { UsertableModule } from './../usertable/usertable.module';
import { HomeRoutingModule } from './home-routing.module';
// components
import { HomeComponent } from './home.component';

@NgModule({
	declarations: [HomeComponent],
	imports: [
		CommonModule,
		HomeRoutingModule,
		MatCardModule,
		MatButtonModule,
		FlexLayoutModule,
		MatCarouselModule.forRoot(),
		UsertableModule
	],
	exports: []
})
export class HomeModule {}
