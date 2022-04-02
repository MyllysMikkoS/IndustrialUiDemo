import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

enum NavSelection {
  Main,
  Analytics
}

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  appName = 'UI DEMO';
  appVersion = 'v1.0';
  selectedNavigation: NavSelection = NavSelection.Main;

  public get navSelection(): typeof NavSelection {
    return NavSelection;
  }

  constructor(private router: Router) {
    this.router.events.subscribe((route) => {
      if (route instanceof NavigationEnd) {
        this.selectedNavigation = route.url === '/main' ? NavSelection.Main : NavSelection.Analytics;
      }
    });
  }

  ngOnInit(): void {
  }
}
