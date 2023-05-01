import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { FinancingComponent } from './financing.component';

describe('FinancingComponent', () => {
  let component: FinancingComponent;
  let fixture: ComponentFixture<FinancingComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FinancingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinancingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
