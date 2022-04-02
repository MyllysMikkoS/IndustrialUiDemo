import { AnalyticsPageComponent } from './analytics-page/analytics-page.component';
import { MainPageComponent } from './main-page/main-page.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'main', component: MainPageComponent },
  { path: 'analytics', component: AnalyticsPageComponent },
  { path: '**', redirectTo: '/main', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
