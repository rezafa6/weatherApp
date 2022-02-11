import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { SuggestService } from './suggest-service';

@Component({
  selector: 'app-right-section',
  templateUrl: './right-section.component.html',
  styleUrls: ['./right-section.component.scss'],
  providers: [SuggestService] ,
  encapsulation: ViewEncapsulation.None,
})
export class RightSectionComponent implements OnInit {

  // properties
  suggestedLocations: any[] = []
  
  constructor(
    private suggestService: SuggestService
  ) { }


  ngOnInit(): void {
    this.initSugestedLocations()
  }

  initSugestedLocations() {
    this.suggestedLocations = this.suggestService.getSuggestedLocations()
  }

}
