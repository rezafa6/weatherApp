// modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
// components
import { HomeComponent } from './home/home.component';
import { LeftSectionComponent } from './home/left-section/left-section.component';
import { RightSectionComponent } from './home/right-section/right-section.component';
import { WeatherDetailsComponent } from './home/right-section/weather-details/weather-details.component';
import { LoadingComponent } from './loading/loading.component';
// material ui modules
import {MatInputModule} from '@angular/material/input';
import { MatFormFieldModule } from "@angular/material/form-field";
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RightSectionComponent,
    LeftSectionComponent,
    WeatherDetailsComponent,
    LoadingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,

    // material 
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
