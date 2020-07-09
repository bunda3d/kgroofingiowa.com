import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './modules/home/home.component';

const routes: Routes = [
	{
		path: 'home',
		loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule)
	},
	{
		path: 'about',
		loadChildren: () => import('./modules/about/about.module').then(m => m.AboutModule)
	},
	{
		path: 'contact',
		loadChildren: () =>
			import('./modules/contact/contact.module').then(m => m.ContactModule)
	},
	{
		path: 'financing',
		loadChildren: () =>
			import('./modules/financing/financing.module').then(m => m.FinancingModule)
	},
	{
		path: 'project',
		loadChildren: () =>
			import('./modules/project/project.module').then(m => m.ProjectModule)
	},
	{
		path: '',
		redirectTo: '/home',
		pathMatch: 'full'
	},
	{
		path: '**',
		component: HomeComponent
	}
];
// for routing to tops of pages:
// https://stackoverflow.com/questions/39601026/angular-2-scroll-to-top-on-route-change
@NgModule({
	imports: [
		RouterModule.forRoot(routes, {
			initialNavigation: 'enabled',
			enableTracing: false,
			scrollPositionRestoration: 'top'
			// Add options right here
		})
	],
	exports: [RouterModule]
})
export class AppRoutingModule {}
