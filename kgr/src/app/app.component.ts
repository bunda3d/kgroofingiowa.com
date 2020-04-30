import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import {
  BreakpointObserver,
  Breakpoints,
  BreakpointState
} from '@angular/cdk/layout';
import { Observable, Subject } from 'rxjs';
import { ThemeService } from './core/services/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  Page = 'KG Roofing';
  items: Observable<any[]>;
  title = 'angular-material-router-outlet';
  isLightTheme: Observable<boolean>;

  constructor(
    public breakpointObserver: BreakpointObserver,
    private themeService: ThemeService,
    firestore: AngularFirestore  
  ) {
    this.items = firestore.collection('items').valueChanges();
  }

  ngOnInit() {
    this.isLightTheme = this.themeService.isLightTheme;
  }
}
