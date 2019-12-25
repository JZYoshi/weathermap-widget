import { Component } from '@angular/core';
import { DataFactoryService } from './data-factory.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'weathermap-widget';

  constructor(private dataFactory: DataFactoryService) {
  }
}
