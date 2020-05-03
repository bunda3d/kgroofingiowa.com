import { AppRoutingModule } from './app-routing.module'
import { BrowserModule, HammerModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { LayoutModule } from '@angular/cdk/layout'
import { MatSliderModule } from '@angular/material/slider'
import { NgModule } from '@angular/core'
import { OverlayContainer, FullscreenOverlayContainer } from '@angular/cdk/overlay'
import { AngularFireModule } from '@angular/fire'
import { AngularFireAnalyticsModule } from '@angular/fire/analytics'
import { AngularFirestoreModule } from '@angular/fire/firestore'
import { AngularFireStorageModule } from '@angular/fire/storage'

import { AppComponent } from './app.component'
import { environment } from 'src/environments/environment'
import { ThemeService } from './core/services/theme.service'
import { SidenavModule } from './modules/sidenav/sidenav.module'

@NgModule({
	declarations: [AppComponent],
	imports: [
		AppRoutingModule,
		BrowserModule,
		BrowserAnimationsModule,
		HammerModule,
		LayoutModule,
		MatSliderModule,
		SidenavModule,
		// sets key to initialize firebase:
		AngularFireModule.initializeApp(environment.firebase),
		AngularFireAnalyticsModule,
		AngularFirestoreModule,
		AngularFireStorageModule
	],
	providers: [
		ThemeService,
		{
			provide: OverlayContainer,
			useClass: FullscreenOverlayContainer
		}
	],
	bootstrap: [AppComponent]
})
export class AppModule {
	constructor(overlayContainer: OverlayContainer) {
		overlayContainer.getContainerElement().classList.add('light-theme')
	}
}
