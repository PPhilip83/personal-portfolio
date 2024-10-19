import { Component, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements AfterViewInit {
  constructor(private el: ElementRef) {}

  ngAfterViewInit(): void {
    this.createObserver();
  }

  createObserver() {
    const options = {
      root: null,
      threshold: 0.2,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          this.animateSection();
          observer.unobserve(entry.target);
        }
      });
    }, options);

    observer.observe(this.el.nativeElement);
  }

  animateSection() {
    this.el.nativeElement.classList.add('animate-section');
  }
}
