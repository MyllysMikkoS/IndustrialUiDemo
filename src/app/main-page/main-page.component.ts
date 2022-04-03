import { SimulatorService, MachineState, ProcessStep } from './../simulator.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  get itemName(): string {
    return this.simulator.getItemName();
  }

  get processedQuantity(): number {
    return this.simulator.getProcessedQuantity();
  }

  get machineState(): string {
    return MachineState[this.simulator.getMachineState()];
  }

  get isActive(): boolean {
    return this.simulator.getMachineState() === MachineState.Active;
  }

  get processSteps(): ProcessStep[] {
    return this.simulator.getProcessSteps();
  }

  get currentStepIndex(): number {
    return this.simulator.getCurrentStepIndex();
  }

  get currentOverallProgress(): number {
    let maxTotalProgress = 0;
    let currentTotalProgress = 0;

    this.simulator.getProcessSteps().forEach((step) => {
      currentTotalProgress += step.getRuntime();
      maxTotalProgress += step.getEstimatedTime();
    });

    return (currentTotalProgress / maxTotalProgress) * 100;
  }

  get startDisabled(): boolean {
    return !this.simulator.canStartProcessing();
  }

  get stopDisabled(): boolean {
    return !this.simulator.canStopProcessing();
  }

  get cancelDisabled(): boolean {
    return !this.simulator.canCancelProcessing();
  }

  constructor(private simulator: SimulatorService) { }

  ngOnInit(): void {
  }

  start(): void {
    this.simulator.start();
  }

  stop(): void {
    this.simulator.stop();
  }

  cancel(): void {
    this.simulator.cancel();
  }
}
