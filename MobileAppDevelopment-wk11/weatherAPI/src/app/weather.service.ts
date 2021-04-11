import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const apiKey = 'b6d552d521a6755c0b5004e7d501f556';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private httpClient: HttpClient) {}

	getWeatherFromApi(city: string) {
		return this.httpClient.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`);
	}
}
