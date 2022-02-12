import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-weather-details',
  templateUrl: './weather-details.component.html',
  styleUrls: ['./weather-details.component.scss']
})
export class WeatherDetailsComponent implements OnInit {
  @Input() weatherData :any;
  
  constructor() { }

  ngOnInit(): void { }

  // toggle more panel
  openMorePanel(item: any , index: number) {
    item.expand = !item.expand
    let panelElm = document.getElementById('panelElm' + index) as HTMLDivElement
    if (item.expand) {
    panelElm.style.maxHeight= panelElm.scrollHeight + 'px';
    } else {
    panelElm.style.maxHeight = '0';
    }
  }

}
