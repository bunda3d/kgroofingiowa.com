import { TestBed } from '@angular/core/testing';

import { AngularfirebaseService } from './angularfirebase.service';

describe('AngularfirebaseService', () => {
  let service: AngularfirebaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AngularfirebaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
