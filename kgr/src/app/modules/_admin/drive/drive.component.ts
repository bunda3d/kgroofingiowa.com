import { Component, OnInit } from '@angular/core';

/* declare function gisLoaded(): void;
declare function gapiLoaded(): void; */

@Component({
  selector: 'app-drive',
  templateUrl: './drive.component.html',
  styleUrls: ['./drive.component.scss']
})
export class DriveComponent implements OnInit {

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
