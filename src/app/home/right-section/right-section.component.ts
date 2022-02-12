import { Component, ElementRef, EventEmitter, HostListener, OnInit, Output, ViewChild, ViewEncapsulation } from '@angular/core';
import {  Subject } from 'rxjs';
import { WeatherHttpService } from 'src/app/httpServices/weather-http-service';
import { SuggestService } from './suggest-service';
import { tap, debounceTime } from 'rxjs/operators';
@Component({
  selector: 'app-right-section',
  templateUrl: './right-section.component.html',
  styleUrls: ['./right-section.component.scss'],
  providers: [SuggestService] ,
  encapsulation: ViewEncapsulation.None,
})
export class RightSectionComponent implements OnInit {
  // properties
  @ViewChild('mainContent') panelElm !: ElementRef
  @Output() emitDataFormHomeCoponent = new EventEmitter();
  reactiveSearch = new Subject<string>();
  suggestedLocations: any[] = [];
  locationBasicData: any[] = [];
  searchLoadng: boolean = false;
  searchValue: string = '';
  weatherData: any ;
  loading: boolean = false;
  isSticky: boolean = false;
  constructor(
    private suggestService: SuggestService,
    private weatherHttpService: WeatherHttpService
  ) {
    // click everywhere to close the result panel 
    window.addEventListener('click' , ()=> {this.searchValue =''} )
    }

    onScroll(event: any) {
    if( event.target.scrollTop > 100) {this.isSticky = true}
    if(event.target.scrollTop < 100) {this.isSticky = false}
    }
  
  ngOnInit(): void {
    this.initSugestedLocations();
    this.initReactiveSearch();
    this.setDefaultLocation()
  }
  
  search(searchValue: any) {
    this.searchValue = searchValue.target.value
    this.reactiveSearch.next(searchValue.target.value);
  }
  initReactiveSearch() {
   this.reactiveSearch.pipe(
    //  side effect : loading start and make last search result clear
     tap(() => {this.searchLoadng = true ; this.locationBasicData = [] }) ,
    //  wait for user to finish typing
     debounceTime(500),
    //  side effect : loading end
     tap(() => this.searchLoadng = false)
    // send final search text to api
   ).subscribe(
     searchText => {
       if(searchText.length) {
        this.searchLocationWitHttpService(searchText)
       }
     }
   )
  }

  searchLocationWitHttpService(value: string) {
    this.searchLoadng = true;
    this.weatherHttpService.getLocationDetailByName(value).then(
      res => {
        let tempData:any = res;
        this.locationBasicData = tempData;
        // only show six items
        this.locationBasicData  = this.locationBasicData.slice(0,6);
        this.searchLoadng = false;
      }
    )
  }

  getLocationWeather(woeid: any) {
    this.loading = true;
    let woeidToSrt = woeid.toString()
   this.weatherHttpService.getLocationWeatherByWoeId(woeidToSrt).then(
    res => {
      let tempData: any = res;
      this.weatherData = tempData;
       // set expand peroperty (boolean) for all data in order to toggle panle to see more details
      this.setExpandOptionForData();
      // set element scroll as default 
      this.panelElm.nativeElement.scrollTo(0,0);
      // send data to parent : home component.ts
      this.emitDataFormHomeCoponent.emit(this.weatherData);
      this.loading = false;
    }
  )
  }
  setExpandOptionForData() {
   this.weatherData.consolidated_weather.forEach((item: { expand: boolean; }) => {
    item.expand = false
    });
  }
  initSugestedLocations() {
    this.suggestedLocations = this.suggestService.getSuggestedLocations()
  }
  setDefaultLocation() {
  this.getLocationWeather(638242)
  }


}
