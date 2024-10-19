import { AfterViewInit, Component, ElementRef, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

declare var VANTA: any; 

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
})
export class LandingPageComponent implements AfterViewInit, OnDestroy {
  private vantaEffect: any;

  constructor(private router: Router, private elementRef: ElementRef) {}

  ngAfterViewInit(): void {
    this.vantaEffect = VANTA.NET({
      el: this.elementRef.nativeElement.querySelector('.vanta-bg'),
      color: 0xffffff,
      backgroundColor: 0x000000,
      points: 10.0,
      maxDistance: 20.0,
    });
  }

  ngOnDestroy(): void {
    if (this.vantaEffect) {
      this.vantaEffect.destroy();
    }
  }


  navigateToAbout() {
    const aboutSection = document.getElementById('about-page');
    if (aboutSection) {
      aboutSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  }
}
