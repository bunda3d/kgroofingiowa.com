import { Component, OnInit } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { ThemeService } from './core/services/theme.service';

import { Router, RouterEvent, NavigationEnd, NavigationStart } from '@angular/router';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
	Page = 'KG Roofing';
	items: Observable<any[]>;
	isDarkTheme: Observable<boolean>;
	public loading: boolean;

	constructor(
		private themeService: ThemeService,
		public breakpointObserver: BreakpointObserver,
		router: Router
	) {
		this.loading = false;
		router.events.subscribe((event: RouterEvent): void => {
			if (event instanceof NavigationStart) {
				this.loading = true;
			} else if (event instanceof NavigationEnd) {
				this.loading = false;
			}
		});
	}

	ngOnInit() {
		this.isDarkTheme = this.themeService.isDarkTheme;
	}
}
