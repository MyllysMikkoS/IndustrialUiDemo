import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-process-time-chart',
  styleUrls: ['./process-time-chart.component.scss'],
  template: `
  <div class="process-time-chart">
    <div class="names">
      <p>Active</p>
      <p>Idle</p>
    </div>
    <div class="bars">
      <div class="chart-half">
        <div class="bar-green" [style.width]="activeBarWidth"></div>
      </div>
      <div class="chart-half">
        <div class="bar-yellow" [style.width]="idleBarWidth"></div>
      </div>
    </div>
    <div class="values">
      <p>{{activePercentage | number:'1.0-0'}} %</p>
      <p>{{idlePercentage | number:'1.0-0'}} %</p>
    </div>
  </div>
  `
})
export class ProcessTimeChartComponent implements OnInit {
  @Input() activePercentage = 0;
  @Input() idlePercentage = 0;

  get activeBarWidth(): string {
    const clampedPercent = Math.max(Math.min(this.activePercentage, 100), 0);
    return clampedPercent + '%';
  }

  get idleBarWidth(): string {
    const clampedPercent = Math.max(Math.min(this.idlePercentage, 100), 0);
    return clampedPercent + '%';
  }

  constructor() { }

  ngOnInit(): void {
  }

}
