import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Project } from '../models/project';

@Injectable({
  providedIn: 'root'
})
  
export class FirestoreService {

  constructor(private fs: AngularFirestore) { }

  getProjects(): Observable<Project[]> {
    return this.fs.collection('projects')
      .valueChanges();
  }
  getProject(
    ProjectId: string,
  ): Observable<any> {
    return this.fs.collection('projects')
      .doc(ProjectId).collection('project')
      .valueChanges();
  }
  getProjectFiles(
    ProjectId: string,
    FileId: string
  ): Observable<any> {
    return this.fs.collection('projects')
      .doc(ProjectId).collection('project')
      .doc(FileId).collection('files')
      .valueChanges();
    // or use string template
/*     return this.fs
      .collection('projects/$(ProjectId)/project/$(FileId)/files')
      .valueChanges(); */
  }
}
