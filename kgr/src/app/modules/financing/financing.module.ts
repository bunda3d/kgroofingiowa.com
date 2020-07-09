import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// self-reference components
import { FinancingComponent } from './financing.component';
import { FinancingRoutingModule } from './financing-routing.module';

// Material
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';

// Other
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
	declarations: [FinancingComponent],
	imports: [
		CommonModule,
		FinancingRoutingModule,
		FlexLayoutModule,
		MatCardModule,
		MatListModule,
		MatToolbarModule,
		MatIconModule
	],
	exports: [FinancingComponent]
})
export class FinancingModule {}
