import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { OverlayContainer } from '@angular/cdk/overlay';

@Injectable({
  providedIn: 'root',
})
  export class ThemeService {
  private _lightTheme = new Subject<boolean>();
  isLightTheme = this._lightTheme.asObservable();

  setLightTheme(isLightTheme: boolean): void {
    this._lightTheme.next(isLightTheme);
  }
}
