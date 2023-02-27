import { Component, OnInit } from '@angular/core';

export interface Service {
	name: string;
	acronym: string;
}

/* declare function gisLoaded(): void;
declare function gapiLoaded(): void; */

@Component({
  selector: 'app-drive-upload',
  templateUrl: './drive-upload.component.html',
  styleUrls: ['./drive-upload.component.scss']
})
export class DriveUploadComponent implements OnInit {
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
  
/*   gisLoadedScriptElement: HTMLScriptElement;
  gapiLoadedScriptElement: HTMLScriptElement; */
	constructor() { 
		/*     gisLoaded();
    gapiLoaded();

    this.gisLoadedScriptElement= document.createElement("script");
    this.gapiLoadedScriptElement = document.createElement("script");

    this.gisLoadedScriptElement.src = "https://accounts.google.com/gsi/client";
    this.gapiLoadedScriptElement.src = "https://apis.google.com/js/api.js";

    document.body.appendChild(this.gisLoadedScriptElement);
    document.body.appendChild(this.gapiLoadedScriptElement); */
	}

  ngOnInit(): void {
  }

}
