import { Component } from '@angular/core';
import { WeatherService } from '../weather.service';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  city: string;
  weather: any;

  constructor(private weatherService: WeatherService) {
    this.city = '';
  }

  async handleSubmit() {
    this.weather = null;

    await this.weatherService.getWeatherFromApi(this.city).subscribe(
      (weather) => {
        this.weather = weather;
      },
      (err) => {
        this.weatherService
          .getWeatherFromApi('Toronto')
          .subscribe((weather) => this.weather = weather);
      }
    );
  }
}
