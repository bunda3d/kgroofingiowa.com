import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// self-reference components
import { DriveUploadRoutingModule } from './drive-upload-routing.module';
import { DriveUploadComponent } from './drive-upload.component';
// Material
import { MatLegacyCardModule as MatCardModule } from '@angular/material/legacy-card';
import { MatLegacyListModule as MatListModule } from '@angular/material/legacy-list';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
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
