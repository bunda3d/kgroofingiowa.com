import { AppRoutingModule } from './app-routing.module';
import { BrowserModule, HammerModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { LayoutModule } from '@angular/cdk/layout';
// Material
import { MatSliderModule } from '@angular/material/slider';

import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
// import { OverlayContainer, FullscreenOverlayContainer } from '@angular/cdk/overlay';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { environment } from 'src/environments/environment';
import { ThemeService } from './core/services/theme.service';
import { SidenavModule } from './modules/sidenav/sidenav.module';

@NgModule({
	declarations: [
		AppComponent
		// UsertableComponent
	],
	imports: [
		AppRoutingModule,
		BrowserModule,
		BrowserAnimationsModule,
		CoreModule,
		HammerModule,
		HttpClientModule,
		LayoutModule,
		MatSliderModule,
		// MatTableModule,
		// OverlayContainer,
		FormsModule,
		ReactiveFormsModule,
		SidenavModule
	],
	providers: [
		ThemeService
		/* 		{
			provide: OverlayContainer,
			useClass: FullscreenOverlayContainer
		}, */
		//UserService
	],
	bootstrap: [AppComponent]
})
export class AppModule {
	/* 	constructor(overlayContainer: OverlayContainer) {
		overlayContainer.getContainerElement().classList.add('theme-light');
	} */
}
