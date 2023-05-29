import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// self-reference components
import { DriveReadRoutingModule } from './drive-read-routing.module';
import { DriveReadComponent } from './drive-read.component';
// Material
import { MatLegacyCardModule as MatCardModule } from '@angular/material/legacy-card';
import { MatLegacyListModule as MatListModule } from '@angular/material/legacy-list';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
// Other
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [DriveReadComponent],
  imports: [
    CommonModule,
    DriveReadRoutingModule,
		FlexLayoutModule,
		MatCardModule,
		MatListModule,
		MatToolbarModule,
		MatIconModule
  ]
})
export class DriveReadModule { }
