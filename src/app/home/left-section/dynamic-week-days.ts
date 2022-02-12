import { Injectable } from "@angular/core";

@Injectable()

export class DynamicDateService {
  // props
    days : any[] = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
    date = new Date();
    today : string = '';

    // default date
    initDate() {
        this.today = this.days[this.date.getDay()]
        return this.days[this.date.getDay()];
    }

    //dynamic days of week : decrease
    goToLastDayOfWeek() {
        let index = this.days.indexOf(this.today)
        if(index <= 0) {
          this.today = this.days[6]
          index = 6
        }
        else if(index <= 6) {
            index = index - 1
          this.today = this.days[index]
        }

        return this.today
      }

    //dynamic days of week : increase
    goToNextDayOfWeek() {
        let index = this.days.indexOf(this.today)
        // 
        if(index < 6) {
          index = index + 1
          this.today = this.days[index]
        }
        else if(index == 6) {
          this.today = this.days[0]
          index = 0
        }

        return this.today
      }
}