import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StaightPaswordIndicatorComponent } from './staight-pasword-indicator.component';

describe('StaightPaswordIndicatorComponent', () => {
  let component: StaightPaswordIndicatorComponent;
  let fixture: ComponentFixture<StaightPaswordIndicatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StaightPaswordIndicatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StaightPaswordIndicatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
