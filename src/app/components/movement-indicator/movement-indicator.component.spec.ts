import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovementIndicatorComponent } from './movement-indicator.component';

describe('MovementIndicatorComponent', () => {
  let component: MovementIndicatorComponent;
  let fixture: ComponentFixture<MovementIndicatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovementIndicatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovementIndicatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
