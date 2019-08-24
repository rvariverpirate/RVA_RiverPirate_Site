import { Component, OnInit } from '@angular/core';
import { ProjectType } from '../projectType';
@Component({
  selector: 'app-electronics-over-view',
  templateUrl: './electronics-over-view.component.html',
  styleUrls: ['./electronics-over-view.component.css']
})
export class ElectronicsOverViewComponent implements OnInit {
  projectType: string = "electronic";//ProjectType[1];
  constructor() { }

  ngOnInit() {
  }

}
