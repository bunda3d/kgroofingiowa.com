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
						'We’re proud to work with Firestone, and affirmed in the fact they entered into this exclusive arrangement with KG Roofing. We are in good company. '
				}
			]
		},
		{
			name: 'DaVinci',
			titlebgimg: '/assets/bg/bg-gr-gry-ltr.svg',
			logobgcolor: '#385060',
			logoimg: '/assets/branding/da-vinci-roofs/davinci-title-header.jpg',
			content: [
				{
					id: 0,
					paragraph:
						'DaVinci RoofScapes makes architectural roofing products and siding that look like classic, beautiful, premium materials that create charm and curb appeal. '
				},
				{
					id: 1,
					paragraph:
						'KG Roofing has installed these remarkable materials on residential, commercial, and institutional buildings-always resulting in an impressive display of character. When you install DaVinci, your roof will be admired. '
				},
				{
					id: 2,
					paragraph: `With many styles and colors of synthetic slate and cedar shake, you'll find the right look for your project, and have a durable composite protectant over your building that has a Class A Fire Rating, Class 4 Impact Rating (for hail), 110 mph Wind Rating, and all in a product that lasts (with a lifetime limited warranty). Call us for our DaVinci installation expertise and experience. `
				}
			]
		},
		{
			name: 'GenFlex',
			titlebgimg: '/assets/bg/bg-gr-grn-gry.svg',
			logobgcolor: 'white',
			logoimg: '/assets/branding/genflex-roofs/GENFLEXauthorizedDealer.jpg',
			content: [
				{
					id: 0,
					paragraph: `GenFlex produces high-quality roofing products, including PolyIso insulation kits for metal roof retrofits. If you're looking to save significant energy costs and improve the thermal envelope of your buildings, call us to talk about your options. `
				}
			]
		},
		{
			name: 'GAF',
			titlebgimg: '/assets/bg/bg-gr-red-blk.svg',
			logobgcolor:
				'radial-gradient(205.37% 430.32% at 50% 81%, #F00000 0%, #333333 100%)',
			logoimg: '/assets/branding/gaf-roofs/GAFLogo.jpg',
			content: [
				{
					id: 0,
					paragraph: `GAF is part of the largest roofing and waterproofing business in the world. GAF offers excellent products, including architectural and 3-tab asphalt shingles. `
				}
			]
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
