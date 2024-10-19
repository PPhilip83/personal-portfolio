import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandningPageComponent } from './landing-page.component';

describe('LandningPageComponent', () => {
  let component: LandningPageComponent;
  let fixture: ComponentFixture<LandningPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LandningPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LandningPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
