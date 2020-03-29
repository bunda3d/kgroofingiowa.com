import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavComponent } from './sidenav.component';
import { MatSidenavModule, MatSlideToggleModule, MatListModule } from '@angular/material';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    SidenavComponent
  ],
  imports: [
    CommonModule, 
    MatSidenavModule,
    MatIconModule,
    MatButtonModule, 
    MatToolbarModule,
    MatListModule,
    MatSlideToggleModule,
    RouterModule

  ],
  exports: [
    SidenavComponent
  ]
})
export class SidenavModule { }
