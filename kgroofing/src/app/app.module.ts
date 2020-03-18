import { BrowserModule, Title, HammerModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CoreModule } from '../core/core.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {OverlayContainer, FullscreenOverlayContainer} from '@angular/cdk/overlay';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { AboutComponent } from './about/about.component';
import { FinancingComponent } from './financing/financing.component';
import { HomeComponent } from './home/home.component';
import { BlogComponent } from './blog/blog.component';
import { BlogsComponent } from './blogs/blogs.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { HeroSliderComponent } from './hero-slider/hero-slider.component';
import { MembersComponent } from './members/members.component';
import { ProductsComponent } from './products/products.component';
import { ProjectComponent } from './project/project.component';
import { ProjectsComponent } from './projects/projects.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';

@NgModule({
   declarations: [
    AppComponent,
    MainNavComponent,
    AboutComponent,
    FinancingComponent,
    HomeComponent,
    ContactComponent,
    ProjectsComponent,
    FooterComponent,
    BlogComponent,
    BlogsComponent,
    HeroSliderComponent,
    ProjectComponent,
    ProductsComponent,
    MembersComponent
   ],
   imports: [
    BrowserModule,
    HammerModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CoreModule,
  // PWA info
  // https://dev.to/negue/service-worker-registered-yet-354d
    ServiceWorkerModule.register('./ngsw-worker.js', {
      enabled: environment.production,
      registrationStrategy: 'registerImmediately'
    }),
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatSlideToggleModule,
    FlexLayoutModule,
    MatGridListModule,
    FormsModule
  ],
  providers: [
    Title,
    {provide: OverlayContainer, useClass: FullscreenOverlayContainer}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(overlayContainer: OverlayContainer) {
    overlayContainer.getContainerElement().classList.add('kglight-theme');
  }
 }

// View icons here: https://material.io/resources/icons/?icon=settings&style=baseline
