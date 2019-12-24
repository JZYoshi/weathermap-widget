import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { moduleTypeMap } from './moduleTypeMap';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataFactoryService {

  public weatherDataSubject = new BehaviorSubject({});

  constructor(private http: HttpClient) { }

  getWeatherData(city: { name: string, coordinates: any }) {
    let query = '?';
    // tslint:disable-next-line: forin
    for (const coordinate in city.coordinates) {
      query += coordinate + '=' + city.coordinates[coordinate] + '&';
    }
    if (query.slice(-1) === '&') {
      query = query.slice(0, -1);
    }
    const options = {
      headers: {
        Authorization: 'Bearer ' + '5dfbd4b067368a000b6e32d6|1fb9c32086a15e0fc528aefd9f92c99c',
      }
    };
    this.http.get<any>('https://api.netatmo.com/api/getpublicdata' + query, options)
    .subscribe((data) => {
      const refinedWeatherData = this.processWeatherData(data.body);
      this.weatherDataSubject.next(refinedWeatherData);
    });
  }

  processWeatherData(rawData) {
    const refinedData = {};
    rawData.forEach((station) => {
      if (Object.keys(station.module_types).length === 3) {
        for (const moduleId in station.measures) {
          if (moduleId in station.module_types) {
            refinedData[moduleTypeMap[station.module_types[moduleId]]] = station.measures[moduleId];
          }
        }
        return refinedData;
      }
    });
    return refinedData;
  }
}
