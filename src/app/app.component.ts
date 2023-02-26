import { Component, OnInit } from '@angular/core';
import { weatherData } from './models/weather.model';
import { WeatherService } from './services/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private weatherService: WeatherService) {}

  cityName = 'wellington';
  lastSearchedCity: string = '';
  weatherData: weatherData | undefined;

  async ngOnInit() {
    await this.getWeatherData(this.cityName);
  }

  clearInput() {
    this.cityName = '';
  }
  onSubmit() {
    this.lastSearchedCity = this.cityName; // guarda el nombre de la ciudad
    this.getWeatherData(this.cityName);
    this.clearInput();
  }

  

  private async getWeatherData(cityName: string) {
    const response = await this.weatherService.getWeatherData(cityName).toPromise();
    this.weatherData = response;
    console.log(response);
  }
}