import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page/main-page.component';
import { AnalyticsPageComponent } from './analytics-page/analytics-page/analytics-page.component';
import { NavigationComponent } from './common-components/navigation/navigation/navigation.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    AnalyticsPageComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
