import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// self-reference components
import { ContactComponent } from './contact.component';
import { ContactRoutingModule } from './contact-routing.module';

// Material
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

// Other
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputsModule } from '../_forms/inputs.module';

@NgModule({
	declarations: [ContactComponent],
	imports: [
		FormsModule,
		ReactiveFormsModule,
		CommonModule,
		ContactRoutingModule,
		FlexLayoutModule,
		MatCardModule,
		MatListModule,
		MatToolbarModule,
		MatIconModule,
		MatFormFieldModule,
		MatInputModule,
		InputsModule
	],
	exports: [ContactComponent]
})
export class ContactModule {}
