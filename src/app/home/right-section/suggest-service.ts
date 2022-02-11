import { Injectable } from "@angular/core";

@Injectable()

export class SuggestService {

    suggestedLocations: any [] = [
        {title : 'Berlin' , woeid: 638242},
        {title: "New York", woeid: 2459115},
        {title: "Manchester", woeid: 28218},
        {title: "Amsterdam", woeid: 727232},
    ]
    getSuggestedLocations() {
        return this.suggestedLocations
    }


}