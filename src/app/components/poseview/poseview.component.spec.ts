import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PoseviewComponent } from './poseview.component';

describe('PoseviewComponent', () => {
  let component: PoseviewComponent;
  let fixture: ComponentFixture<PoseviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoseviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoseviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
