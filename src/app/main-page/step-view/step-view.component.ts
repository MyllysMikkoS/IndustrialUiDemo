import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-step-view',
  styleUrls: ['./step-view.component.scss'],
  template: `
  <div class="process-step">
    <div class="widget-header">{{stepTitle}}</div>
    <div class="step-info">
      <div class="label-value-group">
        <div class="label">Run time:</div>
        <div class="value">{{runTime}} s</div>
      </div>
      <div class="label-value-group">
        <div class="label">Estimated time:</div>
        <div class="value">{{estimatedTime}} s</div>
      </div>
    </div>
    <div class="progress">
      <div class="label">Progress</div>
      <app-progress-bar [progress]="10" [heightPixels]="20"></app-progress-bar>
    </div>
  </div>
  `
})
export class StepViewComponent implements OnInit {
  @Input() stepTitle = 'Step title';
  @Input() runTime = 0;
  @Input() estimatedTime = 0;

  // @ViewChild('container') container!: ElementRef<HTMLDivElement>;

  constructor() { }

  ngOnInit(): void {
  }

}
