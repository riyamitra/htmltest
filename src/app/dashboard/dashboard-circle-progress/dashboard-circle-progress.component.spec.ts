import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardCircleProgressComponent } from './dashboard-circle-progress.component';

describe('DashboardCircleProgressComponent', () => {
  let component: DashboardCircleProgressComponent;
  let fixture: ComponentFixture<DashboardCircleProgressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardCircleProgressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardCircleProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
