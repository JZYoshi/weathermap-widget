import { Component, OnInit } from '@angular/core';
import { DataFactoryService } from '../data-factory.service';

@Component({
  selector: 'app-information-block',
  templateUrl: './information-block.component.html',
  styleUrls: ['./information-block.component.css']
})
export class InformationBlockComponent implements OnInit {

  weatherData = {};
  category = '';
  infoTypes = [];

  constructor(private dataFactory: DataFactoryService) {
    this.dataFactory.weatherDataSubject.subscribe({
      next: (data) => {
        this.weatherData = data;
      },
      error: (e) => {
        console.log(e);
      }
    });
  }

  ngOnInit() {
  }

  changeDisplayCategory(category: string) {
    this.category = category;
    this.infoTypes = Object.keys(this.weatherData[category]);
  }
}
