import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DataFactoryService } from '../data-factory.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {

  categories: string[] = [];
  @Output() categoryChosen: EventEmitter<string> = new EventEmitter();

  constructor(private dataFactory: DataFactoryService) {
    this.dataFactory.weatherDataSubject.subscribe({
      next: (data) => {
        this.categories = Object.keys(data);
      },
      error: () => {
        this.categories = [];
      }
    });
  }

  ngOnInit() {
  }
}
