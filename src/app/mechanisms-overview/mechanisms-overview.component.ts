import { Component, OnInit } from '@angular/core';
import { ProjectType } from '../projectType';
@Component({
  selector: 'mechanisms-overview',
  templateUrl: './mechanisms-overview.component.html',
  styleUrls: ['./mechanisms-overview.component.css']
})
export class MechanismsOverviewComponent implements OnInit {
  projectType: string = "mechanism";
  constructor() { }

  ngOnInit() {
  }

}
