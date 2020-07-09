import { Component, OnInit } from '@angular/core';
import { ProjectService } from 'src/app/core/services/project.service';

@Component({
	selector: 'app-projects-list',
	templateUrl: './projects-list.component.html',
	styleUrls: ['./projects-list.component.scss']
})
export class ProjectsListComponent implements OnInit {
	projects: any;
	currentProject = null;
	currentIndex = -1;
	title = '';

	constructor(private projectService: ProjectService) {}

	ngOnInit(): void {
		this.retrieveProjects();
	}

	retrieveProjects(): void {
		this.projectService.getAll().subscribe(
			data => {
				this.projects = data;
				console.log(data);
			},
			error => {
				console.log(error);
			}
		);
	}

	refreshList(): void {
		this.retrieveProjects();
		this.currentProject = null;
		this.currentIndex = -1;
	}

	setActiveProject(project, index): void {
		this.currentProject = project;
		this.currentIndex = index;
	}

	removeAllProjects(): void {
		this.projectService.deleteAll().subscribe(
			response => {
				console.log(response);
				this.retrieveProjects();
			},
			error => {
				console.log(error);
			}
		);
	}

	searchTitle(): void {
		this.projectService.findByTitle(this.title).subscribe(
			data => {
				this.projects = data;
				console.log(data);
			},
			error => {
				console.log(error);
			}
		);
	}
}
