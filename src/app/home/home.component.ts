import { Component, OnInit, ViewChild } from '@angular/core';
import { LeftSectionComponent } from './left-section/left-section.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  weatherDataFromRightSection : any
  @ViewChild('leftSectionRef') leftSectionMethods !:  LeftSectionComponent
  ngOnInit(): void {}

  getDataFromRightSection(data: any) {
    // get data from right section component and send it to left section component
    this.weatherDataFromRightSection = data;
    //set time & date as default
    this.leftSectionMethods.initDate()
  }
}
