import { AfterContentInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { NavigationEnd, Router } from '@angular/router';
import { Observable, Subscription, Subject } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { ThemeService } from '../../core/services/theme.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit, AfterContentInit {
  Page = "KG Roofing";
  isLightTheme: Observable<boolean>;
  events: string[] = [];
  opened: boolean;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(map(result => result.matches), shareReplay()
    );

  @Input() openedSubject: Subject<boolean>;
  @ViewChild('drawer') drawer: SidenavComponent;

  /**
  navHeader = {
    <a routerlink="/">
    <img src="../../../src/assets/branding/KG_Roofing_logo.svg" />
    </a> 
  };
 */
  /**
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
    */

  constructor(
    private breakpointObserver: BreakpointObserver,
    private themeService: ThemeService
  ) { }

  ngOnInit() {
    this.isLightTheme = this.themeService.isLightTheme;
  }

  ngAfterContentInit() {
    this.openedSubject.subscribe(
      keepOpen => this.drawer[keepOpen ? 'open' : 'close']()
    );
  }

  /**
  close() {
    this.sidenav.close();
  }
  */

  toggleLightTheme(checked: boolean) {
    this.themeService.setLightTheme(checked);
  }

  toggle() {
    this.openedSubject.next(!this.drawer.opened);
  }
}
