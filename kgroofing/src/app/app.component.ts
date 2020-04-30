import { Component, HostListener, OnInit } from '@angular/core';
// theme toggle subscription idea from:  https://medium.com/grensesnittet/dynamic-themes-in-angular-material-b6dc0c88dfd7
import { Observable } from 'rxjs';
import { ThemeService } from '../core/services/theme.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
}) export class AppComponent implements OnInit {
  title = 'KG Roofing';

  isLightTheme: Observable<boolean>;



  constructor(
    private themeService: ThemeService
  ) { }

  ngOnInit() {
    this.isLightTheme = this.themeService.isLightTheme;
  }
/**  openedSubject = new Subject<boolean>();
  dismissSidebar() {
    this.openedSubject.next(false);
  }
  
   * got this scheme from: 
   * https://blog.bitsrc.io/dynamic-page-titles-in-angular-98ce20b5c334
   *
   * export class AppComponent implements OnInit {
    title = 'angulartitle';
    constructor(private titleService: Title) { }
    setDocTitle(title: string) {
      console.log('current title:::::' + this.titleService.getTitle());
      this.titleService.setTitle(title);
    }
    ngOnInit() {
      const appTitle = this.titleService.getTitle();
      this.router
        .events.pipe(
          filter(event => event instanceof NavigationEnd),
          map(() => {
            const child = this.activatedRoute.firstChild;
            if (child.snapshot.data['title']) {
              return child.snapshot.data['title'];
            }
            return appTitle;
          })
        ).subscribe((ttl: string) => {
          this.titleService.setTitle(ttl);
        });
    }
   */
}
