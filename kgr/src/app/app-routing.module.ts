import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

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
		path: 'projects',
		loadChildren: () =>
			import('./modules/projects/projects.module').then(m => m.ProjectsModule)
	},
	{
		path: '',
		redirectTo: '/home',
		pathMatch: 'full'
	}
];
// for routing to tops of pages:
// https://stackoverflow.com/questions/39601026/angular-2-scroll-to-top-on-route-change
@NgModule({
	imports: [
		RouterModule.forRoot(routes, {
			scrollPositionRestoration: 'enabled' // Add options right here
		})
	],
	exports: [RouterModule]
})
export class AppRoutingModule {}
