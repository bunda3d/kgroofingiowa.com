import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// self-reference components
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
// Material
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
// Other
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    FlexLayoutModule,
		MatCardModule,
		MatListModule,
		MatToolbarModule,
    MatIconModule
  ],
  exports: [LoginComponent]
})
export class LoginModule {}
