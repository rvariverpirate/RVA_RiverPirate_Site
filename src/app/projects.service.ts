import { Injectable } from '@angular/core';
import { Project } from './project';
import { ProjectType } from './projectType';

// Types of Projects
// electronic: 0
// mechanism: 1
// pyhton: 2

const PROJECT : Project[] =[
	{id: 21, projectType: 0, title: "River Watch", description: "Get live updates on the James Rives bacteria level, water temp, water level, and weather all streamed to a LCD display. Includes PCB and 3D printed case!", gitHub: "https://github.com/rvariverpirate/RiverWatch", mainImage: "assets/images/RiverWatchMain.png"},
	{id: 1, projectType: 0, title: "BBC RSS Feed Reader", description: "WiFi enabled device that displays current news from the BBC.", gitHub: "https://github.com/rvariverpirate/bbcRssFeedReader", mainImage: "assets/images/bbc-news-icon.png"},
	//{id: 2, projectType: 0, title: "Brew Buddy", description: "Get live updates on the status of a home brew. Realtime carbonation rate and temperature.", gitHub: "git", mainImage: "someImage.jpeg"},
	//{id: 3, projectType: 0, title: "Telemetry Experiments", description: "Wireless transmission of IMU and Magnetometer data to receiver using PIC32 and ATMega328p.", gitHub: "https://github.com/rvariverpirate/TelemetryExperiments", mainImage: "someImage.jpeg"},
	{id: 4, projectType: 0, title: "OLED Experiments", description: "Fun with 128x64 i2c OLED.", gitHub: "https://github.com/rvariverpirate/OLED-Experiments/blob/master/i2c_bitmaps/i2c_bitmap.c", mainImage: "someImage.jpeg"},
	//{id: 5, projectType: 1, title: "Boxing Bluetooth", description: "Track number of punches in each round, form, and max impact.", gitHub: "git", mainImage: "someImage.jpeg"},
	{id: 6, projectType: 1, title: "Multiple Gearing", description: "The smaller triangular wheel drives the larger one by the movement of its attached friction-rollers in the radial grooves.", gitHub: "git", mainImage: "assets/images/Mech1_MultipleGearing_27.png"},
	//{id: 7, projectType: 2, title: "Brew Tracker", description: "Graphical display and numerical analysis of data received from the Brew Buddy.", gitHub: "git", mainImage: "someImage.jpeg"},
	//{id: 8, projectType: 2, title: "Guitar Tuner", description: "A basic guitar tuner that can run in Python", gitHub: "https://github.com/rvariverpirate/GuitarTuner", mainImage: "someImage.jpeg"},
	{id: 9, projectType: 1, title: "Spur Gears", description: "Basic example of two spur gears", gitHub: "https://github.com/rvariverpirate", mainImage: "assets/images/spurGears.png"},
	{id: 10, projectType: 0, title: "H-Bridge", description: "Implementation of an H-Bridge to provide bi-directional DC motor control.", gitHub: "https://github.com/rvariverpirate", mainImage: "assets/images/H-Bridge.png"},
	{id: 11, projectType: 0, title: "4-bit Shift Register", description: "A basic 4 bit shift register with enable and clock signal.", gitHub: "https://github.com/rvariverpirate", mainImage: "assets/images/4-bit-shift.png"},
	{id: 12, projectType: 0, title: "3 Minute Timer", description: "Counts down to zero using a 555 timer and displays remaing time on 7-segment display.", gitHub: "https://github.com/rvariverpirate", mainImage: "assets/images/timer3minute.png"},
	{id: 13, projectType: 1, title: "Planetary Gears", description: "This planetary gear train consists of a sun gear (center), planet gears (middle), and a ring gear (outter)", gitHub: "https://github.com/rvariverpirate", mainImage: "assets/images/PlanetaryGears.png"},
	{id: 14, projectType: 0, title: "Parallel to Serial Converter", description: "Takes 4-Bits from user input and transmits it serially into the FIFO buffer. I'm super serial you guys!", gitHub: "https://github.com/rvariverpirate", mainImage: "assets/images/ParallelToSerial.png"},
	{id: 15, projectType: 0, title: "Basic UART on AVR", description: "Example and functional header file to provide basic UART features on an ATMega328 microcontroller.", gitHub: "https://github.com/rvariverpirate/BasicUART", mainImage: "assets/images/UART.png"},
	{id: 16, projectType: 1, title: "Geneva Mechanism", description: "Example of a geoneva mechanism created in SolidWorks.", gitHub: "https://github.com/rvariverpirate", mainImage: "assets/images/geneva_mechanism_old.png"},
	{id: 17, projectType: 0, title: "Servo PWM", description: "Basic PWM for a standard servo motor", gitHub: "https://github.com/rvariverpirate/UART_PWM", mainImage: "assets/images/servoIcon.png"},
	{id: 18, projectType: 1, title: "Square Gears", description: "Basic example of square gears created in solidworks.", gitHub: "https://github.com/rvariverpirate", mainImage: "assets/images/squareGears.png"},
	{id: 19, projectType: 2, title: "Barkangel", description: "Track your dogs every move using a Raspberry Pi, ATMega328p, and a pan-tilt camera.", gitHub: "https://github.com/rvariverpirate/Barkangel", mainImage: "assets/images/Arkangel.jpg"},
	{id: 20, projectType: 1, title: "Differential Gear", description: "Basic example of a differential gear used in automotive vehicles. Created in SolidWorks.", gitHub: "https://github.com/rvariverpirate", mainImage: "assets/images/differential.jpg"},
	{id: 22, projectType: 2, title: "River Scraper", description: "This is the web-scraper used to pre-process data for the River Watch WiFi module.", gitHub: "https://github.com/rvariverpirate/RiverScraper", mainImage: "assets/images/RiverScraperMain.jpg"}
];

@Injectable()
export class ProjectsService {
	constructor() { }
	allProjectData(): Project[]{
		return PROJECT;
	}
	get(id: number) : Project {
		return PROJECT.find(p => p.id === id);
	}
	getProjectsOfType(type: ProjectType): Project[]{
		console.log(type)
		return PROJECT.filter(p => p.projectType === type);
	}

}
