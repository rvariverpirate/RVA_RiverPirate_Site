import { Component, OnInit } from '@angular/core';
import { ProjectType } from '../projectType';
@Component({
  selector: 'app-python-over-view',
  templateUrl: './python-over-view.component.html',
  styleUrls: ['./python-over-view.component.css']
})
export class PythonOverViewComponent implements OnInit {
  projectType: string = "python";
  constructor() { }

  ngOnInit() {
  }

}
