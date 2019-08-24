import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '../projects.service';
import { Project } from '../project';
import { ActivatedRoute } from '@angular/router';
import { TestComponent } from '../projectsHtml/test/test.component';
import { BbcRssFeedComponent } from '../projectsHtml/bbc-rss-feed/bbc-rss-feed.component';
import { BrewBuddyComponent } from '../projectsHtml/brew-buddy/brew-buddy.component';
import { TmExperimentsComponent } from '../projectsHtml/tm-experiments/tm-experiments.component';
import { OledExperimentsComponent } from '../projectsHtml/oled-experiments/oled-experiments.component';
import { BoxingBluetoothComponent } from '../projectsHtml/boxing-bluetooth/boxing-bluetooth.component';
import { MultipleGearingComponent } from '../projectsHtml/multiple-gearing/multiple-gearing.component';
import { SpurGearsComponent } from '../projectsHtml/spur-gears/spur-gears.component';
import { HBridgeComponent } from "../projectsHtml/h-bridge/h-bridge.component";
import { ShiftReg4BitComponent } from "../projectsHtml/shift-reg-4-bit/shift-reg-4-bit.component";
import { Timer3MinComponent } from "../projectsHtml/timer-3-min/timer-3-min.component";
import { BrewTrackerComponent } from '../projectsHtml/brew-tracker/brew-tracker.component';
import { PlanetaryGearsComponent } from '../projectsHtml/planetary-gears/planetary-gears.component';
import { ParallelToSerialComponent } from '../projectsHtml/parallel-to-serial/parallel-to-serial.component';
import { BasicUartComponent } from '../projectsHtml/basic-uart/basic-uart.component';
import { ServoPwmComponent } from '../projectsHtml/servo-pwm/servo-pwm.component';
import { SquareGearsComponent } from '../projectsHtml/square-gears/square-gears.component';
import { BarkAngelComponent } from '../projectsHtml/bark-angel/bark-angel.component';
import { DifferentialComponent } from '../projectsHtml/differential/differential.component';
import { RiverWatchComponent } from '../projectsHtml/river-watch/river-watch.component';
import { RiverScraperComponent } from '../projectsHtml/river-scraper/river-scraper.component';


import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgComponentOutlet } from '@angular/common';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css']
})

@NgModule({
  imports: [BrowserModule],
  declarations: [AppComponent, TestComponent],
  entryComponents: [TestComponent],
  bootstrap: [ AppComponent ]
})

export class ProjectDetailsComponent implements OnInit {
  selectedProject: Project;
    
  page = TestComponent;

  projectId: number;
  isTest: boolean;
  isBbcRssFeed: boolean;
  isBrewBuddy: boolean;
  isTmExperiments: boolean;
  isOledExperiments: boolean;
  isBoxingBluetooth: boolean;
  isMultipleGearing: boolean;
  isBrewTracker: boolean;
  isGuitarTuner: boolean;
  isSpurGears: boolean;
  isHBridge: boolean;
  isShiftRegister: boolean;
  isTimer3Minute: boolean;
  isPlanetaryGears: boolean;
  isParallelToSerial: boolean;
  isBasicUart: boolean;
  isGenevaMechanism: boolean;
  isServoPwm: boolean;
  isSquareGears: boolean;
  isBarkAngel: boolean;
  isDifferential: boolean;
  isRiverWatch: boolean;
  isRiverScraper: boolean;

  constructor(private projectService: ProjectsService, private route: ActivatedRoute) { }
  ngOnInit() {
  	this.route.params.subscribe(params => {
  		this.projectId = parseInt(params['id']);
  	});
  	this.selectedProject = this.projectService.get(this.projectId);
  	console.log(this.selectedProject);
    this.page = TestComponent;

    this.isTest = false;

    if(this.projectId == 1){
      this.isBbcRssFeed = true;
    }
    else if(this.projectId == 2){
      this.isBrewBuddy = true;
    }
    else if(this.projectId == 3){
      this.isTmExperiments = true;
    }
    else if(this.projectId == 4){
      this.isOledExperiments = true;
    }
    else if(this.projectId == 5){
      this.isBoxingBluetooth = true;
    }
    else if(this.projectId == 6){
      this.isMultipleGearing = true;
    }
    else if(this.projectId == 7){
      this.isBrewTracker = true;
    }
    else if(this.projectId == 8){
      this.isGuitarTuner = true;
    }
    else if(this.projectId == 9){
      this.isSpurGears = true;
    }
    else if(this.projectId == 10){
      this.isHBridge = true;
    }
    else if(this.projectId == 11){
      this.isShiftRegister = true;
    }
    else if(this.projectId == 12){
      this.isTimer3Minute = true;
    }
    else if(this.projectId == 13){
      this.isPlanetaryGears = true;
    }
    else if(this.projectId == 14){
      this.isParallelToSerial = true;
    }
    else if(this.projectId == 15){
      this.isBasicUart = true;
    }
    else if(this.projectId == 16){
      this.isGenevaMechanism = true;
    }
    else if(this.projectId == 17){
      this.isServoPwm = true;
    }
    else if(this.projectId == 18){
      this.isSquareGears = true;
    }
    else if(this.projectId == 19){
      this.isBarkAngel = true;
    }
    else if(this.projectId == 20){
      this.isDifferential = true;
    }
        else if(this.projectId == 21){
      this.isRiverWatch= true;
    }
        else if(this.projectId == 22){
      this.isRiverScraper = true;
    }

    //else{
    //  this.isTest = true;
    //}

  }

}
