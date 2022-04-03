import { Injectable } from '@angular/core';

export enum MachineState {
  Idle = 0,
  Active = 1
}

export class ProcessStep {
  private index = 0;
  private name = '';
  private estimatedTime = 0;

  private runTime = 0;

  constructor(index: number, name: string, estimatedTime: number) {
    this.index = index;
    this.name = name;
    this.estimatedTime = estimatedTime;
  }

  getIndex(): number {
    return this.index;
  }

  getName(): string {
    return this.name;
  }

  getEstimatedTime(): number {
    return this.estimatedTime;
  }

  setRuntime(newRunTime: number): void {
    this.runTime = newRunTime;
  }

  getRuntime(): number {
    return this.runTime;
  }
}

@Injectable({
  providedIn: 'root'
})
export class SimulatorService {

  private simulationTickSeconds = 0.25;

  // Machine state
  private machineState: MachineState = MachineState.Idle;

  // Process info
  private itemName = 'TestItem1';
  private processedQuantity = 0;
  private currentProcessStepIndex = -1;

  // Steps (simulator has hardcoded process steps for now)
  private processSteps: ProcessStep[] = [
    new ProcessStep(0, 'Starting step', 1),
    new ProcessStep(1, 'Execution step', 3),
    new ProcessStep(2, 'Finishing step', 2)
  ];

  constructor() {
    setInterval(() => { this.simulationUpdate(); }, this.simulationTickSeconds * 1000);
  }

  getItemName(): string {
    return this.itemName;
  }

  getProcessedQuantity(): number {
    return this.processedQuantity;
  }

  getMachineState(): MachineState {
    return this.machineState;
  }

  getProcessSteps(): ProcessStep[] {
    return this.processSteps;
  }

  getCurrentStepIndex(): number {
    return this.currentProcessStepIndex;
  }

  start(): void {
    if (!this.canStartProcessing()) {
      return;
    }

    this.setMachineState(MachineState.Active);
  }

  stop(): void {
    if (!this.canStopProcessing()) {
      return;
    }

    this.setMachineState(MachineState.Idle);
  }

  cancel(): void {
    if (!this.canCancelProcessing()) {
      return;
    }

    this.machineState = MachineState.Idle;
    this.currentProcessStepIndex = -1;

    this.processSteps.forEach(step => {
      step.setRuntime(0);
    });
  }

  canStartProcessing(): boolean {
    return this.machineState === MachineState.Idle;
  }

  canStopProcessing(): boolean {
    return this.machineState === MachineState.Active;
  }

  canCancelProcessing(): boolean {
    return this.currentProcessStepIndex >= 0;
  }

  private simulationUpdate(): void {
    // Start new process if needed
    if (this.currentProcessStepIndex === -1 && this.machineState === MachineState.Active) {
      this.currentProcessStepIndex = 0;
    }

    // If machine is active then progress process, otherwise do nothing and idle
    if (this.machineState === MachineState.Active) {
      const currentStep = this.processSteps[this.currentProcessStepIndex];
      const newRunTime = currentStep.getRuntime() + this.simulationTickSeconds;
      currentStep.setRuntime(newRunTime);

      // Advance steps
      if (currentStep.getRuntime() >= currentStep.getEstimatedTime()) {
        // Move to next step
        if (this.currentProcessStepIndex < this.processSteps.length - 1) {
          this.currentProcessStepIndex++;
        } else { // Complete process
          this.processedQuantity++;
          this.cancel();
        }
      }
    }
  }

  private setMachineState(newMachineState: MachineState): void {
    this.machineState = newMachineState;
  }
}
