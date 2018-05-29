import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { 4x4Component } from './4x4.component';

describe('4x4Component', () => {
  let component: 4x4Component;
  let fixture: ComponentFixture<4x4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 4x4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(4x4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
