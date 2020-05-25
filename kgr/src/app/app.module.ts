import { AppRoutingModule } from './app-routing.module';
import { BrowserModule, HammerModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { LayoutModule } from '@angular/cdk/layout';
import { MatSliderModule } from '@angular/material/slider';

import { NgModule } from '@angular/core';
// import { OverlayContainer, FullscreenOverlayContainer } from '@angular/cdk/overlay';

import { AngularFireModule } from '@angular/fire';
import { AngularFireAnalyticsModule } from '@angular/fire/analytics';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { environment } from 'src/environments/environment';
import { ThemeService } from './core/services/theme.service';
import { SidenavModule } from './modules/sidenav/sidenav.module';

//import { UsertableModule } from './modules/usertable/usertable.module';
//import { UsertableComponent } from './modules/usertable/usertable.component';

@NgModule({
	declarations: [
		AppComponent
		//UsertableComponent
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
		//MatTableModule,
		// OverlayContainer,
		SidenavModule,
		//UsertableModule,
		// sets key to initialize firebase:
		AngularFireModule.initializeApp(environment.firebase),
		AngularFireAnalyticsModule,
		AngularFirestoreModule,
		AngularFireStorageModule
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
