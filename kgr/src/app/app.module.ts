import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { OverlayContainer } from '@angular/cdk/overlay';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';

import { environment } from 'src/environments/environment';
import { SidenavModule } from './modules/sidenav/sidenav.module';
import { AboutComponent } from './modules/about/about.component';
import { ContactComponent } from './modules/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    SidenavModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(overlayContainer: OverlayContainer) {
    overlayContainer
      .getContainerElement()
      .classList.add('angular-material-router-app-theme');
  }
}
