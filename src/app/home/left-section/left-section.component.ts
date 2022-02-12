import { Component, Input, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { DynamicDateService } from './dynamic-week-days';

@Component({
  selector: 'app-left-section',
  templateUrl: './left-section.component.html',
  styleUrls: ['./left-section.component.scss'],
  providers: [DynamicDateService]
})
export class LeftSectionComponent implements OnInit {
  iconPath = environment.weatherIconsPath;
  @Input() weatherData: any;
  currentDay: number = 0;
  today: string = '';

  constructor(
    private dynamicDateService: DynamicDateService
  ) { }

  ngOnInit(): void {
    this.initDate()
  }

  initDate() {
    this.today = this.dynamicDateService.initDate()
  }

  goToNextDay(currentDay: number) {
    if (currentDay == this.weatherData.consolidated_weather.length - 1) {
      this.currentDay = 0
    } else {
      this.currentDay++;
    }

    this.today = this.dynamicDateService.goToNextDayOfWeek()
  }

  goToPrevDay(currentDay: number) {
    if (currentDay <= 0) {
      this.currentDay = this.weatherData.consolidated_weather.length - 1;
    } else {
      this.currentDay--;
    }
    this.today = this.dynamicDateService.goToLastDayOfWeek()
  }


}


