import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { AnalyticsPageComponent } from './analytics-page/analytics-page.component';
import { NavigationComponent } from './common-components/navigation/navigation.component';
import { ProgressBarComponent } from './common-components/progress-bar/progress-bar.component';
import { StepViewComponent } from './main-page/step-view/step-view.component';
import { ProcessTimeChartComponent } from './common-components/process-time-chart/process-time-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    AnalyticsPageComponent,
    NavigationComponent,
    ProgressBarComponent,
    StepViewComponent,
    ProcessTimeChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
