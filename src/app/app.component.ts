import { Component, OnInit } from '@angular/core';
import { WeatherHttpService } from './httpServices/weather-http-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private s: WeatherHttpService) {}
  ngOnInit(): void {
   this.s.getData().then(
     res => {console.log(res)},
     err => {console.log(err)},
   )

   this.s.getW().then(
    res => {console.warn(res)},
    err => {console.log(err)},
  )
  }



  title = 'weatherApp';
}
