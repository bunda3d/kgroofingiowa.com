import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DriveUploadComponent } from './drive-upload.component';

describe('DriveUploadComponent', () => {
  let component: DriveUploadComponent;
  let fixture: ComponentFixture<DriveUploadComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DriveUploadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DriveUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
