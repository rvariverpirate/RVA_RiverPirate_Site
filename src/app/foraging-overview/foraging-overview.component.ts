import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-foraging-overview',
  templateUrl: './foraging-overview.component.html',
  styleUrls: ['./foraging-overview.component.css']
})
export class ForagingOverviewComponent implements OnInit {
  projectType: string = "foraging";
  constructor() { }

  ngOnInit() {
  }

}
