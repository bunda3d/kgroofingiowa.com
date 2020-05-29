import { Component, OnInit } from '@angular/core';

export interface Service {
	name: string;
	acronym: string;
}

@Component({
	selector: 'app-about',
	templateUrl: './about.component.html',
	styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
	services: Service[] = [
		{
			name: 'Inspections',
			acronym: ''
		},
		{
			name: 'Free Estimates',
			acronym: ''
		},
		{
			name: 'Repairs',
			acronym: ''
		},
		{
			name: 'Maintenance',
			acronym: ''
		},
		{
			name: 'Commercial Roofing',
			acronym: ''
		},
		{
			name: 'Residential Roofing',
			acronym: ''
		},
		{
			name: 'Insulation',
			acronym: ''
		},
		{
			name: 'Energy Efficiency Improvement',
			acronym: ''
		},
		{
			name: 'Tear off',
			acronym: ''
		},
		{
			name: 'Site Cleanup',
			acronym: ''
		},
		{
			name: 'Metal Roof Coating',
			acronym: ''
		},
		{
			name: 'Metal Roof Retrofitting',
			acronym: ''
		}
	];

	constructor() {}

	ngOnInit(): void {}
}
