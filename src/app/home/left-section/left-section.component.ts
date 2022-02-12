import { Component, Input, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-left-section',
  templateUrl: './left-section.component.html',
  styleUrls: ['./left-section.component.scss']
})
export class LeftSectionComponent implements OnInit {
  @Input() weatherData : any;
  currentDay: number = 0;
  today: string = '';
  time: string = '';
  iconPath = environment.weatherIconsPath;
  constructor() { }

  ngOnInit(): void {
    this.initDateAndTime()
  }

  goToNextDay(currentDay: number) {
    if(currentDay == this.weatherData.consolidated_weather.length - 1) {
      this.currentDay = 0
    } else {
      this.currentDay ++;
    } 
  }
  
  goToPrevDay(currentDay: number) {
    if(currentDay <= 0) {
      this.currentDay = this.weatherData.consolidated_weather.length - 1
    } else {
      this.currentDay --;
    }
  }

  initDateAndTime() {
    const days = ['SUN' ,'MON', 'TUE' ,'WED','THU','FRI','SAT' ];
    let date = new Date();
    this.today = days[date.getDay()];
    this.time = `${date.getHours()}:${date.getMinutes()} `;
  }

}
