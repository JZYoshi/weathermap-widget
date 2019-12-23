import { Component, OnInit } from '@angular/core';
import { DataFactoryService } from '../data-factory.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {

  constructor(dataFactory: DataFactoryService) { }

  ngOnInit() {
  }

}
