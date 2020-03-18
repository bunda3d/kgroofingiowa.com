import { Component, OnInit } from '@angular/core';

export interface Tile {
  rows: number;
  cols: number;
  icon: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  tiles: Tile[] = [
    { icon: 'camera_roll_outline', cols: 1, rows: 1 },
    { icon: 'event_note_outline', cols: 2, rows: 1 },
    { icon: 'business', cols: 1, rows: 2 },
    { icon: 'home', cols: 2, rows: 2 },
    { icon: 'list_alt', cols: 1, rows: 3 },
    { icon: 'done_all', cols: 2, rows: 3 },
  ];

  constructor() { }

  ngOnInit() { }
}
