import { Component, OnInit, Input, ViewChild, ElementRef, Renderer2, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  styleUrls: ['./progress-bar.component.scss'],
  template: `
  <div class="progress-bar-container" #container>
    <div class="progress-fill" [style.width]="fillWidth" #fill>
    </div>
  </div>
  `
})
export class ProgressBarComponent implements OnInit, AfterViewInit {
  @Input() progress = 0;
  @Input() heightPixels = 50;

  @ViewChild('container') container!: ElementRef<HTMLDivElement>;
  @ViewChild('fill') fill!: ElementRef<HTMLDivElement>;

  get fillWidth(): string {
    const clampedFill = Math.max(Math.min(this.progress, 100), 0);
    return clampedFill + '%';
  }

  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.renderer.setStyle(this.container.nativeElement, 'height', this.heightPixels + 'px');
  }
}
