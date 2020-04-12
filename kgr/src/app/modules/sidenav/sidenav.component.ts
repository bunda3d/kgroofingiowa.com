import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

import { NavigationEnd, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { ColorPickerService } from 'src/app/core/services/color-picker.service';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit, OnDestroy {
  Page = "KG Roofing";

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(
    private router: Router,
    private breakpointObserver: BreakpointObserver,
    private colorPicker: ColorPickerService
  ) { }
  routerSub: Subscription;
  @ViewChild('snav') public sidenav: MatSidenav;
  // title = `$Page`;
  ngOnDestroy() {
    this.routerSub.unsubscribe();
  }

  // this will be used for closing the sidenav drawer and scrolling to the top of the screen
  ngOnInit() {
    this.routerSub = this.router.events.subscribe(event => {
      if (this.sidenav && event instanceof NavigationEnd) {
        this.sidenav.close();
      } if (!(event instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0);
    });
  }
  openThemeMenu() { }
    pickColor(color: string) {
      let colorTheme = '';
      if (color !== '') {
        colorTheme = `-${color}`;
      }
      this.colorPicker.setColorClass(
        `angular-material-router-app-theme${colorTheme}`
      );
    }
  snavToggle(snav){
    snav.toggle();
  }
}
