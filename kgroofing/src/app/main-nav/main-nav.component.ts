import { AfterContentInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { map, shareReplay } from 'rxjs/operators';
import { Subject, Observable } from 'rxjs';
import { ThemeService } from '../../core/services/theme.service';


@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss']
})
export class MainNavComponent implements OnInit, AfterContentInit {
  title = 'KG Roofing';
  isLightTheme: Observable<boolean>;
  events: string[] = [];
  opened: boolean;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(map(result => result.matches), shareReplay()
    );

  @Input() openedSubject: Subject<boolean>;
  @ViewChild('drawer') drawer: MainNavComponent;

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
