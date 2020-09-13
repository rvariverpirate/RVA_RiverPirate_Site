import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { TopNavBarComponent } from './top-nav-bar/top-nav-bar.component';
import { ProjectsComponent } from './projects/projects.component';
import { ElectronicsOverViewComponent } from './electronics-over-view/electronics-over-view.component';
import { PythonOverViewComponent } from './python-over-view/python-over-view.component';
import { MechanismsOverviewComponent } from './mechanisms-overview/mechanisms-overview.component';
import { MainPageComponent } from './main-page/main-page.component';
import { RouterModule } from '@angular/router';
import { ProjectsService } from './projects.service';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { HighlightModule } from 'ngx-highlightjs';
//import { NgTemplateOutlet } from '@angular/core';

/* Import prism core */
import 'prismjs/prism';
 
/* Import the language you need to highlight */
import 'prismjs/components/prism-c';
 
import { PrismComponent } from 'angular-prism';
import { TestComponent } from './projectsHtml/test/test.component';
import { BbcRssFeedComponent } from './projectsHtml/bbc-rss-feed/bbc-rss-feed.component';
import { BrewBuddyComponent } from './projectsHtml/brew-buddy/brew-buddy.component';
import { TmExperimentsComponent } from './projectsHtml/tm-experiments/tm-experiments.component';
import { OledExperimentsComponent } from './projectsHtml/oled-experiments/oled-experiments.component';
import { BoxingBluetoothComponent } from './projectsHtml/boxing-bluetooth/boxing-bluetooth.component';
import { BrewTrackerComponent } from './projectsHtml/brew-tracker/brew-tracker.component';
import { MultipleGearingComponent } from './projectsHtml/multiple-gearing/multiple-gearing.component';
import { GuitarTunerComponent } from './projectsHtml/guitar-tuner/guitar-tuner.component';
import { SpurGearsComponent } from './projectsHtml/spur-gears/spur-gears.component';
import { HBridgeComponent } from './projectsHtml/h-bridge/h-bridge.component';
import { ShiftReg4BitComponent } from './projectsHtml/shift-reg-4-bit/shift-reg-4-bit.component';
import { Timer3MinComponent } from './projectsHtml/timer-3-min/timer-3-min.component';
import { PlanetaryGearsComponent } from './projectsHtml/planetary-gears/planetary-gears.component';
import { ParallelToSerialComponent } from './projectsHtml/parallel-to-serial/parallel-to-serial.component';
import { BasicUartComponent } from './projectsHtml/basic-uart/basic-uart.component';
import { GenevaMechanismComponent } from './projectsHtml/geneva-mechanism/geneva-mechanism.component';
import { ServoPwmComponent } from './projectsHtml/servo-pwm/servo-pwm.component';
import { SquareGearsComponent } from './projectsHtml/square-gears/square-gears.component';
import { BarkAngelComponent } from './projectsHtml/bark-angel/bark-angel.component';
import { DifferentialComponent } from './projectsHtml/differential/differential.component';
import { RiverWatchComponent } from './projectsHtml/river-watch/river-watch.component';
import { RiverScraperComponent } from './projectsHtml/river-scraper/river-scraper.component';
import { ForagingOverviewComponent } from './foraging-overview/foraging-overview.component';
import { ThreeDPrintingOverviewComponent } from './three-d-printing-overview/three-d-printing-overview.component';
import { RoboticsOverviewComponent } from './robotics-overview/robotics-overview.component';
import { RadioOverviewComponent } from './radio-overview/radio-overview.component';
import { DasBootComponent } from './projectsHtml/das-boot/das-boot.component';
import { PhoneCaseComponent } from './projectsHtml/phone-case/phone-case.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { MySpecsComponent } from './my-specs/my-specs.component';


@NgModule({
  declarations: [
    AppComponent,
    TopNavBarComponent,
    ProjectsComponent,
    ElectronicsOverViewComponent,
    PythonOverViewComponent,
    MechanismsOverviewComponent,
    MainPageComponent,
    ProjectDetailsComponent,
    TestComponent,
    BbcRssFeedComponent,
    BrewBuddyComponent,
    TmExperimentsComponent,
    OledExperimentsComponent,
    BoxingBluetoothComponent,
    BrewTrackerComponent,
    MultipleGearingComponent,
    GuitarTunerComponent,
    SpurGearsComponent,
    HBridgeComponent,
    ShiftReg4BitComponent,
    Timer3MinComponent,
    PlanetaryGearsComponent,
    ParallelToSerialComponent,
    BasicUartComponent,
    GenevaMechanismComponent,
    ServoPwmComponent,
    SquareGearsComponent,
    BarkAngelComponent,
    DifferentialComponent,
    RiverWatchComponent,
    RiverScraperComponent,
    ForagingOverviewComponent,
    ThreeDPrintingOverviewComponent,
    RoboticsOverviewComponent,
    RadioOverviewComponent,
    DasBootComponent,
    PhoneCaseComponent,
    AboutMeComponent,
    MySpecsComponent
  ],
  imports: [
    BrowserModule,
    HighlightModule.forRoot({ theme: 'atelier-seaside-dark'}),
    RouterModule.forRoot([
      {
        path: 'home',
        component: MainPageComponent
      },
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
      },
      {
        path: 'projects/:type',
        component: ProjectsComponent
      },
      {
        path: 'projects/:type/:id',
        component: ProjectDetailsComponent
      },
      {
        path: 'my-specs',
        component: MySpecsComponent
      },
      {
        path: '**', redirectTo: '/home', pathMatch: 'full'
      }
    ])
  ],
  providers: [ProjectsService],
  bootstrap: [AppComponent]
})


export class AppModule { }
