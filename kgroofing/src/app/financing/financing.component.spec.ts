/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FinancingComponent } from './financing.component';

describe('FinancingComponent', () => {
  let component: FinancingComponent;
  let fixture: ComponentFixture<FinancingComponent>;

  beforeEach(async(() => {
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
