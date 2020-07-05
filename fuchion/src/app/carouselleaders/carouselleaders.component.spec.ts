import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselleadersComponent } from './carouselleaders.component';

describe('CarouselleadersComponent', () => {
  let component: CarouselleadersComponent;
  let fixture: ComponentFixture<CarouselleadersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarouselleadersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselleadersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
