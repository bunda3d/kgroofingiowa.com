import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { ColorPickerService } from './core/services/color-picker.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  Page = 'KG Roofing';
  items: Observable<any[]>;
  themeClass;
  title = 'angular-material-router-outlet';

  constructor(
    private colorPicker: ColorPickerService,
    firestore: AngularFirestore  
  ) {
    this.themeClass = this.colorPicker.getColorClass();
    this.items = firestore.collection('items').valueChanges();
  }

  ngOnInit(): void {}
}
