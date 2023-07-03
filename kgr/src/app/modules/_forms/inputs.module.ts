import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import {
	FormctrlPhoneComponent,
	InputPhoneNum
} from './formctrl-phone/formctrl-phone.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
	declarations: [FormctrlPhoneComponent, InputPhoneNum],
	imports: [
		CommonModule,
		FormsModule,
		ReactiveFormsModule,
		MatButtonModule,
		MatInputModule,
		MatFormFieldModule,
		MatIconModule
	],
	exports: [FormctrlPhoneComponent, InputPhoneNum]
})
export class InputsModule {}
