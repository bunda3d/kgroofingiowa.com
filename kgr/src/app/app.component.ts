import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
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
		firestore: AngularFirestore,
		public breakpointObserver: BreakpointObserver
	) {
		this.items = firestore.collection('items').valueChanges();
	}

	ngOnInit() {
		this.isDarkTheme = this.themeService.isDarkTheme;
	}
}
