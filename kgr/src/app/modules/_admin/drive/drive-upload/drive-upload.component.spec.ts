import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DriveUploadComponent } from './drive-upload.component';

describe('DriveUploadComponent', () => {
  let component: DriveUploadComponent;
  let fixture: ComponentFixture<DriveUploadComponent>;

  beforeEach(async(() => {
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
