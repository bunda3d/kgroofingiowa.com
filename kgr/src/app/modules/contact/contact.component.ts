import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
	selector: 'app-contact',
	templateUrl: './contact.component.html',
	styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
	profileForm = this.fb.group({
		firstName: ['', Validators.required],
		lastName: [''],
		address: this.fb.group({
			street: [''],
			city: [''],
			state: [''],
			zip: ['']
		})
	});
	constructor(private fb: FormBuilder) {}

	ngOnInit(): void {}
}
