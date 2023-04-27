import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// self-reference components
import { DriveUploadRoutingModule } from './drive-upload-routing.module';
import { DriveUploadComponent } from './drive-upload.component';
// Material
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
// Other
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  declarations: [DriveUploadComponent],
  imports: [
    CommonModule,
    DriveUploadRoutingModule,
		FlexLayoutModule,
		MatCardModule,
		MatListModule,
		MatToolbarModule,
    MatIconModule,
    MatButtonModule
  ],
  exports: [DriveUploadComponent]
})
export class DriveUploadModule {}
