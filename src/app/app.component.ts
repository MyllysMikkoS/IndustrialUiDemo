import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.scss'],
  template: `
  <app-navigation></app-navigation>
  <div class="page-container">
    <router-outlet></router-outlet>
  </div>
  `,
})
export class AppComponent {
  title = 'industrial-ui-demo';
}
