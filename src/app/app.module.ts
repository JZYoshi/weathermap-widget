import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { CityListComponent } from './city-list/city-list.component';
import { WeatherDisplayPanelComponent } from './weather-display-panel/weather-display-panel.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { InformationBlockComponent } from './information-block/information-block.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatChipsModule } from '@angular/material/chips';
import { FlexLayoutModule } from '@angular/flex-layout';

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
    BrowserAnimationsModule,
    MatGridListModule,
    MatToolbarModule,
    MatChipsModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
