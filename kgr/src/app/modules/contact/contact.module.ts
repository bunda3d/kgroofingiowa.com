import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// self-reference components
import { ContactComponent } from './contact.component';
import { ContactRoutingModule } from './contact-routing.module';

// Material
import { MatLegacyCardModule as MatCardModule } from '@angular/material/legacy-card';
import { MatLegacyListModule as MatListModule } from '@angular/material/legacy-list';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatLegacyFormFieldModule as MatFormFieldModule } from '@angular/material/legacy-form-field';
import { MatLegacyInputModule as MatInputModule } from '@angular/material/legacy-input';

// Other
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputsModule } from '../_forms/inputs.module';
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';

@NgModule({
	declarations: [ContactComponent],
	imports: [
		FormsModule,
		ReactiveFormsModule,
		CommonModule,
		ContactRoutingModule,
		FlexLayoutModule,
		MatButtonModule,
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
