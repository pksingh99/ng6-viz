import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { 2x1Component } from './2x1.component';

describe('2x1Component', () => {
  let component: 2x1Component;
  let fixture: ComponentFixture<2x1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 2x1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(2x1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
