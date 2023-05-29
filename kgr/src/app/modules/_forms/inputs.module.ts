import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
import { MatLegacyInputModule as MatInputModule } from '@angular/material/legacy-input';
import { MatLegacyFormFieldModule as MatFormFieldModule } from '@angular/material/legacy-form-field';
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
