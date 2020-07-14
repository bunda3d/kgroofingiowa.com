import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProjectService } from 'src/app/core/services/project.service';

export interface ProjectTodo {
	id: number;
	paragraph: string;
}
[];

@Component({
	selector: 'app-project',
	templateUrl: './project.component.html',
	styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
	projectTodos: ProjectTodo[] = [
		{
			id: 0,
			paragraph: `Check out images of our past work, `
		},
		{
			id: 1,
			paragraph: `Call for a free, professional roof inspection, `
		},
		{
			id: 2,
			paragraph: `Know your roof's condition [ Important ] `
		},
		{
			id: 3,
			paragraph: `Get recommendations on keeping your major	assets protected. `
		}
	];
	constructor(private projectService: ProjectService) {}

	ngOnInit() {}
}
