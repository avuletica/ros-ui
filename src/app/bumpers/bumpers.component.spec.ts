import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BumpersComponent } from './bumpers.component';

describe('BumpersComponent', () => {
  let component: BumpersComponent;
  let fixture: ComponentFixture<BumpersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BumpersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BumpersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
