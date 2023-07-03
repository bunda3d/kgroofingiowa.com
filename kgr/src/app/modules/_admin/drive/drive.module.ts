import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// self-reference components
import { DriveRoutingModule } from './drive-routing.module';
import { DriveComponent } from './drive.component';
// Material
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
// Other
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  declarations: [DriveComponent],
  imports: [
    CommonModule,
    DriveRoutingModule,
    FlexLayoutModule,
		MatCardModule,
		MatListModule,
		MatToolbarModule,
		MatIconModule
  ],
  exports: [DriveComponent]
})
export class DriveModule {}
