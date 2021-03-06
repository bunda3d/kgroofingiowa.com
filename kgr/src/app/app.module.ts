import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { LayoutModule } from '@angular/cdk/layout';
import { MatTableModule } from '@angular/material/table';
import { MatSliderModule } from '@angular/material/slider';
import { MatButtonModule } from '@angular/material/button';
import {
	MatFormFieldModule,
	MAT_FORM_FIELD_DEFAULT_OPTIONS
} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';

// import { OverlayContainer, FullscreenOverlayContainer } from '@angular/cdk/overlay';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { environment } from 'src/environments/environment';
import { ThemeService } from './core/services/theme.service';
import { SidenavModule } from './modules/sidenav/sidenav.module';
import { ProjectService } from './core/services/project.service';
// import { ImagekitioAngularModule } from './imagekitio-angular/imagekitio-angular.module';
import { InputsModule } from './modules/_forms/inputs.module';
import { EmployeesComponent } from './modules/employees/employees.component';
import { EmployeeComponent } from './modules/employees/employee/employee.component';
import { ProjectModule } from './modules/project/project.module';
import { ServiceWorkerModule } from '@angular/service-worker';

@NgModule({
	declarations: [AppComponent, EmployeesComponent, EmployeeComponent],
	imports: [
		BrowserModule,
		FormsModule,
		ReactiveFormsModule,
		BrowserAnimationsModule,
		CoreModule,
		HttpClientModule,
		LayoutModule,
		CommonModule,
		MatSliderModule,
		MatTableModule,
		MatButtonModule,
		MatFormFieldModule,
		MatInputModule,
		MatIconModule,
		// OverlayContainer,
		SidenavModule,
		InputsModule,
		ProjectModule,
		AppRoutingModule,
		ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
		// ImagekitioAngularModule.forRoot({
		// 	// https://github.com/imagekit-developer/imagekit-angular
		// 	publicKey: environment.publicKey,
		// 	urlEndpoint: environment.urlEndpoint,
		// 	authenticationEndpoint: environment.authenticationEndpoint
		// })
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
		/* 		{
			provide: OverlayContainer,
			useClass: FullscreenOverlayContainer
		}, */
	],
	exports: [InputsModule],
	bootstrap: [AppComponent]
})
export class AppModule {
	/* 	constructor(overlayContainer: OverlayContainer) {
		overlayContainer.getContainerElement().classList.add('theme-light');
	} */
}
