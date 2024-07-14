import { Injectable } from '@angular/core';
import { Location } from '../models/location.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ForecastedTemperature } from '../models/weather.model';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

    /**
   * List of weather locations.
   * This is a simulation of data that should come from a database or API in a real scenario.
   * 
   * @type {Array<{ id: string, name: string }>}
   */
  public locations: Array<{ id: string; name: string; }> = [
    {
      id: 'LWX',
      name: 'District of Columbia Forecast'
    },
    {
      id: 'TOP',
      name: 'Kansas Forecast'
    }
  ]

  private apiUrl: string;

  constructor(private http: HttpClient) { 
    this.apiUrl = 'https://api.weather.gov/gridpoints/';
  }

  public getForecast(id: string): Observable<ForecastedTemperature> {
    return this.http.get<ForecastedTemperature>(`${this.apiUrl}${id}/31,80/forecast`);
  }
}
