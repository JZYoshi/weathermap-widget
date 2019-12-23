import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { CityListComponent } from './city-list/city-list.component';
import { WeatherDisplayPanelComponent } from './weather-display-panel/weather-display-panel.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { InformationBlockComponent } from './information-block/information-block.component';

@NgModule({
  declarations: [
    AppComponent,
    CityListComponent,
    WeatherDisplayPanelComponent,
    CategoryListComponent,
    InformationBlockComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
