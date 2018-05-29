import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { 1x2Component } from './1x2.component';

describe('1x2Component', () => {
  let component: 1x2Component;
  let fixture: ComponentFixture<1x2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 1x2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(1x2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
