import { Component, OnInit } from '@angular/core';
import { cities } from '../cities';
import { DataFactoryService } from '../data-factory.service';

@Component({
  selector: 'app-city-list',
  templateUrl: './city-list.component.html',
  styleUrls: ['./city-list.component.css']
})
export class CityListComponent implements OnInit {

  cities = cities;
  constructor(private dataFactory: DataFactoryService) {
  }

  ngOnInit() {
  }

  getWeatherData(city) {
    this.dataFactory.getWeatherData(city);
  }
}
