import { Component, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { map, shareReplay } from 'rxjs/operators';
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

	@ViewChild('drawer') drawer: SidenavComponent;

	constructor(
		private breakpointObserver: BreakpointObserver,
		private themeService: ThemeService
	) {}

	ngOnInit() {
		this.isDarkTheme = this.themeService.isDarkTheme;
	}

	toggleDarkTheme(checked: boolean) {
		this.themeService.setDarkTheme(checked);
	}
}
