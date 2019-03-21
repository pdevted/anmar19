import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProjectsService, Project } from '@workshop/core-data';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  primaryColor = 'red';
  projects$: Observable<Project[]>;
  selectedProject: Project;

  constructor(private projectsService: ProjectsService) {}

  ngOnInit() {
    this.getProjects();
  }

  selectProject(project) {
    this.selectedProject = project;
    // console.log('SELECTED PROJECT', project);
  }

  getProjects() {
    this.projects$ = this.projectsService.all();
  }

  cancel() {
    this.selectProject(null);
  }
}
