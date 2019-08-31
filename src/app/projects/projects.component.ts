import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectsService } from '../projects.service';
import { Project } from '../project';
import { ProjectType } from '../projectType';
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = [];
  project: Project;
  projectType: ProjectType;
  projectTypeHeader: string;
  constructor(private projectsService : ProjectsService, private route: ActivatedRoute) { }
  ngOnInit() {
  	this.route.params.subscribe(params => {
  		if(params['type'] == 'electronic'){
  			this.projectType = 0;
        this.projectTypeHeader = "Electronics";
  		}
  		else if(params['type'] == 'mechanism'){
  			this.projectType = 1;
        this.projectTypeHeader = "Mechanisms";
  		}
  		else if(params['type'] == 'python'){
  			this.projectType = 2;
        this.projectTypeHeader = "Pythonics";
  		}
  		else if(params['type'] == 'foraging'){
  			this.projectType = 3;
        this.projectTypeHeader = "Foraging";
		}
  		else if(params['type'] == 'printing'){
  			this.projectType = 4;
        this.projectTypeHeader = "3D Printing";
		}
  		else if(params['type'] == 'robotics'){
  			this.projectType = 5;
        this.projectTypeHeader = "Robotics";
		}
  		else if(params['type'] == 'radio'){
  			this.projectType = 6;
        this.projectTypeHeader = "Amatuer Radio";
		}

  		console.log(params['type']);
  	});
  	this.projects = this.projectsService.getProjectsOfType(this.projectType);
  	console.log(this.projects);
  }
  ngOnDestroy(){

  }

}
