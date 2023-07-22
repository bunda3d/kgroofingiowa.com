import { Component, OnInit } from '@angular/core';
import { ContactService } from 'src/app/core/services/contact.service';

@Component({
	selector: 'app-contact',
	templateUrl: './contact.component.html',
	styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
	mailtoObject: string = '';

	constructor(public contactService: ContactService) {}

	ngOnInit() {
		this.mailtoObject = this.contactService.mailtoObject;
	}
}
