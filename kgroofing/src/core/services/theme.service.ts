import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
  export class ThemeService {
    private _lightTheme: Subject<boolean> = new Subject<boolean>();
    isLightTheme = this._lightTheme.asObservable();

    setLightTheme(isLightTheme: boolean) {
      this._lightTheme.next(isLightTheme);
    }
  }
