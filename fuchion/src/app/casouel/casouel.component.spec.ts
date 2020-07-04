import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CasouelComponent } from './casouel.component';

describe('CasouelComponent', () => {
  let component: CasouelComponent;
  let fixture: ComponentFixture<CasouelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CasouelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CasouelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
