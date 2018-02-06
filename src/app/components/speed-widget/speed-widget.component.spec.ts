import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeedWidgetComponent } from './speed-widget.component';

describe('SpeedWidgetComponent', () => {
  let component: SpeedWidgetComponent;
  let fixture: ComponentFixture<SpeedWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpeedWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpeedWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
