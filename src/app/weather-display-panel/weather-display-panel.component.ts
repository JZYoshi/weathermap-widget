import { Component, OnInit, ViewChild } from '@angular/core';
import { InformationBlockComponent } from '../information-block/information-block.component';

@Component({
  selector: 'app-weather-display-panel',
  templateUrl: './weather-display-panel.component.html',
  styleUrls: ['./weather-display-panel.component.css']
})
export class WeatherDisplayPanelComponent implements OnInit {

  @ViewChild(InformationBlockComponent, {static: false})
  informationBlockComponent: InformationBlockComponent;

  constructor() { }

  ngOnInit() {
  }

  showInfo(category: string) {
    this.informationBlockComponent.changeDisplayCategory(category);
  }
}
