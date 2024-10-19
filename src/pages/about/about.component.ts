import { AfterViewInit, Component, ElementRef, OnDestroy } from '@angular/core';

declare var VANTA: any;

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements AfterViewInit, OnDestroy {
  private vantaEffect: any;

  constructor(private elementRef: ElementRef) {}

  ngAfterViewInit(): void {
    this.vantaEffect = VANTA.NET({
      el: this.elementRef.nativeElement,
      color: 0x141e30,
      backgroundColor: 0x243b55,
      points: 12.0,
      maxDistance: 20.0,
    });
  }

  ngOnDestroy(): void {
    if (this.vantaEffect) this.vantaEffect.destroy();
  }
}
