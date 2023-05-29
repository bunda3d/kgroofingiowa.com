import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { CoreModule } from './core/core.module';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputsModule } from './modules/_forms/inputs.module';
import { HttpClientModule } from '@angular/common/http';
//styling
import { LayoutModule } from '@angular/cdk/layout';
import { MatLegacyTableModule as MatTableModule } from '@angular/material/legacy-table';
import { MatLegacySliderModule as MatSliderModule } from '@angular/material/legacy-slider';
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
import {
	MatLegacyFormFieldModule as MatFormFieldModule,
	MAT_LEGACY_FORM_FIELD_DEFAULT_OPTIONS as MAT_FORM_FIELD_DEFAULT_OPTIONS
} from '@angular/material/legacy-form-field';
import { MatLegacyInputModule as MatInputModule } from '@angular/material/legacy-input';
import { MatIconModule } from '@angular/material/icon';
//services & app config
import { ThemeService } from './core/services/theme.service';
import { AppRoutingModule } from './app-routing.module';
import { ProjectService } from './core/services/project.service';
import { environment } from 'src/environments/environment';
import { ServiceWorkerModule } from '@angular/service-worker';
//views
import { AppComponent } from './app.component';
import { SidenavModule } from './modules/sidenav/sidenav.module';
import { ScrollTopComponent } from './modules/scroll-top/scroll-top.component';

@NgModule({
	declarations: [AppComponent, ScrollTopComponent],
	imports: [
		AppRoutingModule,
		BrowserModule,
		BrowserAnimationsModule,
		CommonModule,
		CoreModule,
		FormsModule,
		ReactiveFormsModule,
		InputsModule,
		HttpClientModule,
		LayoutModule,
		MatSliderModule,
		MatTableModule,
		MatButtonModule,
		MatFormFieldModule,
		MatInputModule,
		MatIconModule,
		SidenavModule,
		ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
	],
	providers: [
		ThemeService,
		ProjectService,
		{
			provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
			useValue: {
				floatLabel: 'auto',
				appearance: 'outline'
			}
		}
	],
	exports: [InputsModule],
	bootstrap: [AppComponent]
})
export class AppModule {}
