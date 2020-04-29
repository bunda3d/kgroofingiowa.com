import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCarouselModule } from '@ngmodule/material-carousel';


import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule, 
    HomeRoutingModule,
    MatCardModule,
    MatButtonModule, 
    FlexLayoutModule,    MatCarouselModule.forRoot()
  ],
  exports: [
  ]
})
export class HomeModule { }
