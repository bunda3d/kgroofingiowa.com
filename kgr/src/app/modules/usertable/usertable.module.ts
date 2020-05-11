// modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
// components
import { UsertableComponent } from './../usertable/usertable.component';
// services
import { UserService } from './../../core/services/user.service';

@NgModule({
	declarations: [UsertableComponent],
	imports: [CommonModule, HttpClientModule, MatTableModule],
	exports: [UsertableComponent],
	providers: [UserService]
})
export class UsertableModule {}
