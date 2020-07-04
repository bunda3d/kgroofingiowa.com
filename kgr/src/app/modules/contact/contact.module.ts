import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact.component';
import { ContactRoutingModule } from './contact-routing.module';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
	declarations: [ContactComponent],
	imports: [
		CommonModule,
		ContactRoutingModule,
		FlexLayoutModule,
		MatCardModule,
		MatListModule,
		MatToolbarModule,
		MatIconModule
	],
	exports: [ContactComponent]
})
export class ContactModule {}
