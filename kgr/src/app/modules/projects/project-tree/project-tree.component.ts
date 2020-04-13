import { Component, Injectable, OnDestroy, OnInit } from '@angular/core';
import { FirestoreService } from './../../../core/services/firestore.service';
import { FlatTreeControl } from '@angular/cdk/tree';
import { CollectionViewer, SelectionChange } from '@angular/cdk/collections';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject, merge, Obervable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { Projects } from 'src/app/core/models/projects';
import { Project } from 'src/app/core/models/project';

@Component({
  selector: 'app-project-tree',
  templateUrl: './project-tree.component.html',
  styleUrls: ['./project-tree.component.scss']
})
export class ProjectTreeComponent implements OnInit {
  treeControl: FlatTreeControl<DynamicFlatNode>;
  dataSource: DynamicDataSource;
  
  constructor(
    private route: ActivatedRoute,
    private fs: FirestoreService
  )
  { 
    this.treeControl = new FlatTreeControl<DynamicFlatNode>(
      this.getLevel,
      this.isExpandable
    );
    this.dataSource = new DynamicDataSource(
      this.treeControl,
      this.route,
      this.fs
    );
  }

  ngOnInit(): void {}

  openFile(node: DynamicFlatNode) { }
  getLevel = (node: DynamicFlatNode) => node.level;
  isExpandable = (node: DynamicFlatNode) => node.expandable; 
  hasChilde = (_: number, _nodeData: DynamicFlatNode) => _nodeData.expandable;

}
