import { Component, OnInit } from '@angular/core';

export interface Service {
	name: string;
	acronym: string;
}
export interface RoofType {
	name: string;
	description: string;
}
export interface ProductType {
	name: string;
	description: string;
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

	roofTypes: RoofType[] = [
		{
			name: 'Pitched roofs',
			description: ''
		},
		{
			name: 'Flat roofs',
			description: ''
		},
		{
			name: 'Architectural roofs',
			description: ''
		},
		{
			name: 'Shingled roofs',
			description: ''
		},
		{
			name: 'Metal roofs',
			description: ''
		},
		{
			name: 'Metal / Insulation Retrofits',
			description: ''
		}
	];

	products: ProductType[] = [
		{
			name: 'TPO',
			description: 'ThermoPlastic Olefin'
		},
		{
			name: 'EPDM',
			description: 'Ethylene Propylene Diene Monomer'
		},
		{
			name: 'Synthetic Slate & Shake',
			description: ''
		},
		{
			name: 'Shingles',
			description: ''
		},
		{
			name: 'Roof Coatings',
			description: ''
		},
		{
			name: 'Insulation Panels',
			description: ''
		},
		{
			name: 'Roof Decking',
			description: ''
		}
	];

	constructor() {}

	ngOnInit(): void {}
}
