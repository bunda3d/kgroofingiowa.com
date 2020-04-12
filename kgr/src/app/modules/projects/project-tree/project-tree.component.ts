import { Component, OnInit } from '@angular/core';
import { FirestoreService } from './../../../core/services/firestore.service';

@Component({
  selector: 'app-project-tree',
  templateUrl: './project-tree.component.html',
  styleUrls: ['./project-tree.component.scss']
})
export class ProjectTreeComponent implements OnInit {

  constructor( private fs:FirestoreService ) { }

  ngOnInit(): void {
  }

}
