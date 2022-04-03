import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessTimeChartComponent } from './process-time-chart.component';

describe('ProcessTimeChartComponent', () => {
  let component: ProcessTimeChartComponent;
  let fixture: ComponentFixture<ProcessTimeChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProcessTimeChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcessTimeChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
