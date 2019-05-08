import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorLandingPage } from './error-landing.page';

describe('ErrorLandingPage', () => {
  let component: ErrorLandingPage;
  let fixture: ComponentFixture<ErrorLandingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ErrorLandingPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorLandingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
