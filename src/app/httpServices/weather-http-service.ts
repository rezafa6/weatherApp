import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http'
import { environment } from "src/environments/environment";

@Injectable({providedIn:'root'})
export class WeatherHttpService {
    constructor(private http: HttpClient) {}
    baseURL = environment.baseUrl
    getData() {
    return new Promise((resolve , reject) => {
        this.http.get(this.baseURL + 'search/?query=Amsterdam').subscribe(
            res => {resolve(res)},
            err => {reject(err)}
        )
    })
    }
    getLocationDetailByName(locationName: string) {
        return new Promise((resolve , reject) => {
            this.http.get(this.baseURL + 'search/?query=' + locationName).subscribe(
                res => {resolve(res)},
                err => {reject(err)}
            )
        })
        }
    
        getLocationWeatherByWoeId(locationName: string) {
            return new Promise((resolve , reject) => {
                this.http.get(this.baseURL + locationName).subscribe(
                    res => {resolve(res)},
                    err => {reject(err)}
                )
            })
            }

    getW() {
        return new Promise((resolve , reject) => {
            this.http.get(this.baseURL + '2444674').subscribe(
                res => {resolve(res)},
                err => {reject(err)}
            )
        })
        }
}