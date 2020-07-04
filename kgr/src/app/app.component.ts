import { Component, OnInit } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { ThemeService } from './core/services/theme.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
	Page = 'KG Roofing';
	items: Observable<any[]>;
	isDarkTheme: Observable<boolean>;

	constructor(
		private themeService: ThemeService,
		public breakpointObserver: BreakpointObserver
	) {}

	ngOnInit() {
		this.isDarkTheme = this.themeService.isDarkTheme;
	}
}
