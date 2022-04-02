import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  get currentStepIndex(): number {
    return 1;
  }

  get currentOverallProgress(): number {
    return 40;
  }

  constructor() { }

  ngOnInit(): void {
  }
}
