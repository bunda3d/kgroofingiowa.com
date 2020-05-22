import { Component, OnInit } from '@angular/core';

// import { AuthService } from 'src/app/core/services/auth.service';

export interface ProductService {
	name: string;
	acronym: string;
}

export interface WhyKG {
	why: string;
	description: string;
}

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
	productServices: ProductService[] = [
		{
			name: 'Emergency Repair',
			acronym: ''
		},
		{
			name: 'Free Estimates',
			acronym: ''
		},
		{
			name: 'Maintenance',
			acronym: ''
		},
		{
			name: 'TPO: ',
			acronym: 'ThermoPlastic Olefin membrane'
		},
		{
			name: 'EPDM: ',
			acronym: 'Rubber Ethylene Propylene Diene Monomer membrane'
		},
		{
			name: 'Roof Coatings',
			acronym: ''
		},
		{
			name: 'Shingles',
			acronym: ''
		},
		{
			name: 'Metal Roofs',
			acronym: ''
		},
		{
			name: 'Energy Efficiency Improvement',
			acronym: ''
		},
		{
			name: 'Metal Roofing, Coating & Retrofitting',
			acronym: ''
		},
		{
			name: 'Site Cleanup',
			acronym: ''
		}
	];

	whyKGs: WhyKG[] = [
		{
			why: 'Free Pre-installation inspection: ',
			description:
				'An experienced, trustworthy professional will walk your roof and communicate any issues.'
		},
		{
			why: 'We use industry-best materials',
			description: 'to warranty your roof'
		},
		{
			why: 'Our fully-consultative approach',
			description: 'gets you what you need and eliminates surprises'
		},
		{
			why: 'In-person sample showing: ',
			description: 'Because things may look different online or in print'
		},
		{
			why: `Year-round installations: `,
			description: `You don't have to wait until warmer weather to schedule your roof work`
		},
		{
			why: `Safety First: `,
			description: `Our worksite is safe for both us and you`
		},
		{
			why: `Jobsite Cleanup: `,
			description: `We know this matters to you and we take it seriously`
		}
	];

	constructor() {}

	ngOnInit() {}
}
