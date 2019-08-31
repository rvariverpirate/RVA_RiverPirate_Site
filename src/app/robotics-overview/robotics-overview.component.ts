import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-robotics-overview',
  templateUrl: './robotics-overview.component.html',
  styleUrls: ['./robotics-overview.component.css']
})
export class RoboticsOverviewComponent implements OnInit {
  projectType: string = "robotics";
  constructor() { }

  ngOnInit() {
  }

}
