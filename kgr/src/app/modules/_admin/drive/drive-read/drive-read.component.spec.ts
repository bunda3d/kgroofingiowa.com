import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DriveReadComponent } from './drive-read.component';

describe('DriveReadComponent', () => {
  let component: DriveReadComponent;
  let fixture: ComponentFixture<DriveReadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DriveReadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DriveReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
