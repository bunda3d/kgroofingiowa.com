import { Component, OnInit, Inject } from '@angular/core';
import { UntypedFormBuilder, Validators } from '@angular/forms';
import { UntypedFormArray } from '@angular/forms';

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
		}),

		aliases: this.fb.array([this.fb.control('')])
	});

	constructor(private fb: UntypedFormBuilder) {}

	ngOnInit(): void {}

	get aliases() {
		return this.profileForm.get('aliases') as UntypedFormArray;
	}
	addAlias() {
		this.aliases.push(this.fb.control(''));
	}
}
