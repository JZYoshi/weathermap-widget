import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherDisplayPanelComponent } from './weather-display-panel.component';

describe('WeatherDisplayPanelComponent', () => {
  let component: WeatherDisplayPanelComponent;
  let fixture: ComponentFixture<WeatherDisplayPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherDisplayPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherDisplayPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
