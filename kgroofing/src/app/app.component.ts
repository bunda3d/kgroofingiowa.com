import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
}) export class AppComponent {

  title = 'KG Roofing';

}

/**
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
