import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CamviewComponent } from './camview.component';

describe('CamviewComponent', () => {
  let component: CamviewComponent;
  let fixture: ComponentFixture<CamviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CamviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CamviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
