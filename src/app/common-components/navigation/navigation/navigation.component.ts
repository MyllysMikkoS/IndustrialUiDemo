import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  appName = 'UI DEMO';
  appVersion = 'v1.0';

  constructor() { }

  ngOnInit(): void {
  }

}
