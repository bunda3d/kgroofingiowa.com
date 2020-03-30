/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ColorPickerService } from './color-picker.service';

describe('Service: ColorPicker', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ColorPickerService]
    });
  });

  it('should ...', inject([ColorPickerService], (service: ColorPickerService) => {
    expect(service).toBeTruthy();
  }));
});
