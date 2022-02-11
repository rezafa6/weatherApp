import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http'
import { environment } from "src/environments/environment";

@Injectable({providedIn:'root'})
export class WeatherHttpService {
    constructor(private http: HttpClient) {}
    baseURL = environment.baseUrl
    getData() {
    return new Promise((resolve , reject) => {
        this.http.get(this.baseURL + 'search/?query=Toronto').subscribe(
            res => {resolve(res)},
            err => {reject(err)}
        )
    })
    }


    getW() {
        return new Promise((resolve , reject) => {
            this.http.get(this.baseURL + '4118').subscribe(
                res => {resolve(res)},
                err => {reject(err)}
            )
        })
        }
}