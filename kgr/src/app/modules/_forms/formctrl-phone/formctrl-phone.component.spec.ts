import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { FormctrlPhoneComponent } from './formctrl-phone.component';

describe('FormctrlPhoneComponent', () => {
	let component: FormctrlPhoneComponent;
	let fixture: ComponentFixture<FormctrlPhoneComponent>;

	beforeEach(waitForAsync(() => {
		TestBed.configureTestingModule({
			declarations: [FormctrlPhoneComponent]
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(FormctrlPhoneComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
