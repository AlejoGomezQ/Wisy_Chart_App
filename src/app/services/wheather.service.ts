import { Injectable } from '@angular/core';
import { Location } from '../models/location.model';

@Injectable({
  providedIn: 'root'
})
export class WheatherService {

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

  constructor() { }
}
