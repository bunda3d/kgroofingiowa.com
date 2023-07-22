import { Component, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { map, shareReplay } from 'rxjs/operators';
import { ContactService } from 'src/app/core/services/contact.service';
import { ThemeService } from './../../core/services/theme.service';
import { Observable } from 'rxjs';

@Component({
	selector: 'app-sidenav',
	templateUrl: './sidenav.component.html',
	styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
	Page = 'KG Roofing';
	isDarkTheme: Observable<boolean>;
	mailtoObject: string = '';

	//for mat-nav-list in drawer
	selectedNavItem = '';
	navItems = [
		{ title: 'Home', icon: 'home', path: '/home' },
		{ title: 'About Us', icon: 'assignment', path: '/about' },
		//{ title: 'View Our Work', icon: 'business', path: '/project' }
		{ title: 'Contact Us', icon: 'call', path: '/contact' }
		//{ title: 'Blog', icon: 'art_track', path: '/blogs' }
	];
	//END for mat-nav-list in drawer

	isExtraSmall$: Observable<boolean> = this.breakpointObserver
		.observe(Breakpoints.XSmall)
		.pipe(
			map(result => result.matches),
			shareReplay()
		);
	isSmall$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Small).pipe(
		map(result => result.matches),
		shareReplay()
	);
	isTablet$: Observable<boolean> = this.breakpointObserver
		.observe(Breakpoints.Medium)
		.pipe(
			map(result => result.matches),
			shareReplay()
		);

	//so routed pages scroll to top on load
	onActivate(event) {
		//window.scrollTo(0, 0);
		document.body.scrollTop = 0;
	}

	@ViewChild('drawer') drawer: SidenavComponent;

	constructor(
		private breakpointObserver: BreakpointObserver,
		private themeService: ThemeService,
		public contactService: ContactService
	) {}

	ngOnInit() {
		this.isDarkTheme = this.themeService.isDarkTheme;
		this.mailtoObject = this.contactService.mailtoObject;
	}

	toggleDarkTheme(checked: boolean) {
		this.themeService.setDarkTheme(checked);
	}
}
