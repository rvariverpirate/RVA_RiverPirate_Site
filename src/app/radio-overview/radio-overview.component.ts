import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-radio-overview',
  templateUrl: './radio-overview.component.html',
  styleUrls: ['./radio-overview.component.css']
})
export class RadioOverviewComponent implements OnInit {
  projectType: string = "radio";
  constructor() { }

  ngOnInit() {
  }

}
