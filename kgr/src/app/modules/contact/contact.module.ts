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

// Other
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
	declarations: [ContactComponent],
	imports: [
		CommonModule,
		ContactRoutingModule,
		FlexLayoutModule,
		MatCardModule,
		MatListModule,
		MatToolbarModule,
		MatIconModule,
		MatFormFieldModule
	],
	exports: [ContactComponent]
})
export class ContactModule {}
