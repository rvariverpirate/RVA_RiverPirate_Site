import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-three-d-printing-overview',
  templateUrl: './three-d-printing-overview.component.html',
  styleUrls: ['./three-d-printing-overview.component.css']
})
export class ThreeDPrintingOverviewComponent implements OnInit {
  projectType: string = "printing"
  constructor() { }

  ngOnInit() {
  }

}
