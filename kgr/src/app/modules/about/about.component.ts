import { Component, OnInit } from '@angular/core';

export interface ProductService {
	name: string;
	acronym: string;
}

@Component({
	selector: 'app-about',
	templateUrl: './about.component.html',
	styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
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

	constructor() {}

	ngOnInit(): void {}
}
