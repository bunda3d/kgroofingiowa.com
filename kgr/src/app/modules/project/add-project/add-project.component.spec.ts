import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AddProjectComponent } from './add-project.component';
import { FormsModule } from '@angular/forms';

describe('AddProjectComponent', () => {
	let component: AddProjectComponent;
	let fixture: ComponentFixture<AddProjectComponent>;

	beforeEach(waitForAsync(() => {
		TestBed.configureTestingModule({
			declarations: [AddProjectComponent, FormsModule]
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(AddProjectComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
