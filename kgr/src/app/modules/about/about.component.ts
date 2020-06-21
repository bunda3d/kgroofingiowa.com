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
	content?: {
		id: number;
		paragraph: string;
	}[];
}
export interface VendorContent {
	vendor: string;
	id: number;
	paragraph: string;
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
			logoimg: '/assets/branding/firestone-roofs/firestonelicenced.png',
			content: [
				{
					id: 0,
					paragraph:
						'KG Roofing became a Firestone licensed contractor in 2019. This is an exclusive arrangement (for our region) with a highly regarded roofing products manufacturer. '
				},
				{
					id: 1,
					paragraph:
						'Architects and general contractors specify Firestone branded products because of quality and reputation. Because of this quality promise, we can provide roofs with optional 30-year warranties, which was not possible with some other vendor relationships we’ve held. '
				},
				{
					id: 2,
					paragraph:
						'We’re proud to work with Firestone, and affirmed in the fact they entered into this exclusive arrangement with KG Roofing, we are in rare company. '
				}
			]
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
	vendorContents: VendorContent[] = [
		{
			vendor: 'Firestone',
			id: 1,
			paragraph:
				'KG Roofing became a Firestone licensed contractor in 2019. This is an exclusive arrangement (for our region) with a highly regarded roofing products manufacturer. '
		},
		{
			vendor: 'Firestone',
			id: 2,
			paragraph:
				'Architects and general contractors specify Firestone branded products because of quality and reputation. Because of this quality promise, we can provide roofs with optional 30-year warranties, which was not possible with some other vendor relationships we’ve held. '
		},
		{
			vendor: 'Firestone',
			id: 3,
			paragraph:
				'We’re proud to work with Firestone, and affirmed in the fact they entered into this exclusive arrangement with KG Roofing, we are in rare company. '
		}
	];

	constructor() {}

	ngOnInit(): void {}
}
