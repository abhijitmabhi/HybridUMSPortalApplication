import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesResultsPage } from './courses-results.page';

describe('CoursesResultsPage', () => {
  let component: CoursesResultsPage;
  let fixture: ComponentFixture<CoursesResultsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoursesResultsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesResultsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
