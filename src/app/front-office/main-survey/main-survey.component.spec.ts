import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainSurveyComponent } from './main-survey.component';

describe('MainSurveyComponent', () => {
  let component: MainSurveyComponent;
  let fixture: ComponentFixture<MainSurveyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainSurveyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainSurveyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
