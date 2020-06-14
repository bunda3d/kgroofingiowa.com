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
export interface VendorHeader {
	name: string;
	titlebgimg: string;
	logobgcolor: string;
	logoimg: string;
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
	vendorHeaders: VendorHeader[] = [
		{
			name: 'Firestone',
			titlebgimg: '/assets/bg/bg-gr-red-red.svg',
			logobgcolor: 'white',
			logoimg: '/assets/branding/firestone-roofs/firestonelicenced.png'
		},
		{
			name: 'DaVinci',
			titlebgimg: '/assets/bg/bg-gr-gry-ltr.svg',
			logobgcolor: '#385060',
			logoimg: '/assets/branding/da-vinci-roofs/davinci-title-header.jpg'
		},
		{
			name: 'GenFlex',
			titlebgimg: '/assets/bg/bg-gr-grn-gry.svg',
			logobgcolor: 'white',
			logoimg: '/assets/branding/genflex-roofs/GENFLEXauthorizedDealer.jpg'
		},
		{
			name: 'GAF',
			titlebgimg: '/assets/bg/bg-gr-red-blk.svg',
			logobgcolor:
				'radial-gradient(205.37% 430.32% at 50% 81%, #F00000 0%, #333333 100%)',
			logoimg: '/assets/branding/gaf-roofs/GAFLogo.jpg'
		}
	];

	constructor() {}

	ngOnInit(): void {}
}
