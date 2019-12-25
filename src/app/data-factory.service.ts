import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { moduleTypeMap } from './moduleTypeMap';
import { token, client } from './token';
import { BehaviorSubject, throwError } from 'rxjs';
import { catchError, tap, mergeMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataFactoryService {

  public weatherDataSubject = new BehaviorSubject({});
  public loading = false;
  private token = token;

  constructor(private http: HttpClient) { }

  getWeatherDataObservable(city: { name: string, coordinates: any }, accessToken: string) {
    const options = {
      headers: {
        Authorization: 'Bearer ' + accessToken,
      },
      params: city.coordinates
    };
    return this.http.get<any>('https://api.netatmo.com/api/getpublicdata', options)
    .pipe(
      catchError(err => {
        if (err.error.error.code == 3 || err.error.error.code == 2) {
          const newTokenObservable = this.getNewTokenObservable(client);
          return newTokenObservable.pipe(mergeMap(x => this.getWeatherDataObservable(city, (x as any).access_token)));
        } else {
          return throwError(`Error Code: ${err.status}\nMessage: ${err.message}`);
        }
      })
    );
  }

  getNewTokenObservable(client) {
    const options = {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
      }
    };
    let data = new HttpParams();
    // tslint:disable-next-line: forin
    for (const key in client) {
      data = data.set(key, client[key]);
    }
    return this.http.post('https://api.netatmo.com/oauth2/token', data.toString(), options)
    .pipe(
      tap(next => {
        this.token.access_token = (next as any).access_token;
        this.token.refresh_token = (next as any).refresh_token;
      },
      error => {throw error; })
    );
  }

  processWeatherData(rawData) {
    const refinedData = {};
    rawData.forEach((station) => {
      if (Object.keys(station.module_types).length === 3) {
        refinedData['Temperature'] = {};
        // tslint:disable-next-line: forin
        for (const moduleId in station.measures) {
          if (!!station.measures[moduleId]['type']) {
              // tslint:disable-next-line: prefer-for-of
              for (let i = 0; i < station.measures[moduleId]['type'].length; i++) {
                refinedData['Temperature'][station.measures[moduleId]['type'][i]] = Object.values(station.measures[moduleId]['res'])[0][i];
              }
          } else {
            refinedData[moduleTypeMap[station.module_types[moduleId]]] = station.measures[moduleId];
          }
        }
        return refinedData;
      }
    });
    return refinedData;
  }

  getWeatherData(city: { name: string, coordinates: any }) {
    this.loading = true;
    this.getWeatherDataObservable(city, this.token.access_token)
    .subscribe({
      next: (data) => {
        const refinedWeatherData = this.processWeatherData(data.body);
        this.loading = false;
        this.weatherDataSubject.next(refinedWeatherData);
      },
      error: (msg) => {
        window.alert(msg);
      }
    });
  }

}
