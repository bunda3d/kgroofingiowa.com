import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MatCarouselSlideComponent } from './carousel-slide.component';

describe('MatCarouselSlideComponent', () => {
  let component: MatCarouselSlideComponent;
  let fixture: ComponentFixture<MatCarouselSlideComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MatCarouselSlideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatCarouselSlideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
