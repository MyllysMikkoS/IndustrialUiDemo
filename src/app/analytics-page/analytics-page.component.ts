import { SimulatorService } from './../simulator.service';
import { Component, OnInit } from '@angular/core';

export class PercentageDistribution {
  percentage1 = 0;
  percentage2 = 0;

  constructor(percentage1: number, percentage2: number) {
    this.percentage1 = Math.max(Math.min(percentage1, 100), 0);
    this.percentage2 = Math.max(Math.min(percentage2, 100), 0);
  }
}

@Component({
  selector: 'app-analytics-page',
  templateUrl: './analytics-page.component.html',
  styleUrls: ['./analytics-page.component.scss']
})
export class AnalyticsPageComponent implements OnInit {

  get overallActiveProcessingTime(): number {
    return this.simulator.getAnalyticsData().stepActiveProcessingTimes.reduce(
      (previousValue, currentValue) => previousValue + currentValue, 0);
  }

  get overallIdleProcessingTime(): number {
    return this.simulator.getAnalyticsData().stepIdleProcessingTimes.reduce(
      (previousValue, currentValue) => previousValue + currentValue, 0);
  }

  get cancelledProcesses(): number {
    return this.simulator.getAnalyticsData().cancelledProcesses;
  }

  get step1AverageProcessingTime(): number {
    const analyticsData = this.simulator.getAnalyticsData();
    return (analyticsData.stepActiveProcessingTimes[0]
      + analyticsData.stepIdleProcessingTimes[0]) / Math.max(this.simulator.getProcessedQuantity(), 1);
  }

  get step2AverageProcessingTime(): number {
    const analyticsData = this.simulator.getAnalyticsData();
    return (analyticsData.stepActiveProcessingTimes[1]
      + analyticsData.stepIdleProcessingTimes[1]) / Math.max(this.simulator.getProcessedQuantity(), 1);
  }

  get step3AverageProcessingTime(): number {
    const analyticsData = this.simulator.getAnalyticsData();
    return (analyticsData.stepActiveProcessingTimes[2]
      + analyticsData.stepIdleProcessingTimes[2]) / Math.max(this.simulator.getProcessedQuantity(), 1);
  }

  get allProcessesActivityDistribution(): PercentageDistribution {
    return this.getActivityDistribution(-1);
  }

  get step1ActivityDistribution(): PercentageDistribution {
    return this.getActivityDistribution(0);
  }

  get step2ActivityDistribution(): PercentageDistribution {
    return this.getActivityDistribution(1);
  }

  get step3ActivityDistribution(): PercentageDistribution {
    return this.getActivityDistribution(2);
  }

  constructor(private simulator: SimulatorService) { }

  ngOnInit(): void {
  }

  getActivityDistribution(index: number): PercentageDistribution {
    if (index < 0) {
      const allActive = this.simulator.getAnalyticsData().stepActiveProcessingTimes.reduce(
        (previousValue, currentValue) => previousValue + currentValue, 0);
      const allIdle = this.simulator.getAnalyticsData().stepIdleProcessingTimes.reduce(
        (previousValue, currentValue) => previousValue + currentValue, 0);

      const total = Math.max(allActive + allIdle, 0.0001);
      return new PercentageDistribution((allActive / total) * 100, (allIdle / total) * 100);
    } else {
      const allActive = this.simulator.getAnalyticsData().stepActiveProcessingTimes[index];
      const allIdle = this.simulator.getAnalyticsData().stepIdleProcessingTimes[index];

      const total = Math.max(allActive + allIdle, 0.0001);
      return new PercentageDistribution((allActive / total) * 100, (allIdle / total) * 100);
    }
  }
}
