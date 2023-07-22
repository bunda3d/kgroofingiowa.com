import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class ContactService {
	mailtoObject: string = `mailto:kgroofing@yahoo.com?subject=Email from KGRoofingIowa.com/Contact 
  &body=
  *** PLEASE FILL OUT THE INFO BELOW and OVERWRITE THE SAMPLE TEXT [in brackets] ***%0D%0D
    Name: %0D
    Phone: %0D
    Email: %0D
    Best Time to Contact: %0D%0D
    ADDRESS 1: [Street] %0D
    ADDRESS 2: [City, State, Zip] %0D
    ROOF CLASS: [Commercial, Residential] %0D
    ROOF TYPE: [Shingle, Metal, TPO, Rubber, etc.] %0D
    SUBJECT: [Free Inspection, Quote, Roofing Question, etc.] %0D
    DESCRIPTION: [Explain your issue or request] %0D
    %0D%0D
    *** PLEASE ATTACH PHOTOS of your roof situation, if possible. ***%0D%0D
  `;
}
