import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  weatherDataFromRightSection : any
  constructor() { }

  ngOnInit(): void {
  }
  getDataFromRightSection(data: any) {
    // get data from right section component and send it to left section component
    this.weatherDataFromRightSection = data
    console.log(data , 'faqaaaaaaaaaa')
  }
}
