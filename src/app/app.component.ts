import { Component } from '@angular/core';
import { ProjectsService } from './projects.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private projectsService: ProjectsService){

  }
  someProperty = '';
  ngOnInit(){
  	this.someProperty = this.projectsService.allProjectData()[1].description;
  }
}
