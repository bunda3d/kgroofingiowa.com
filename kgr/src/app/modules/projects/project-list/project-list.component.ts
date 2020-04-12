import { FirestoreService } from './../../../core/services/firestore.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Project } from 'src/app/core/models/project';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss']
})
export class ProjectListComponent implements OnInit {
  projectList: Observable<Project[]>;
  
  constructor( private fs: FirestoreService ) { }

  ngOnInit(): void {
    this.projectList = this.fs.getProjects();
  }

}
