import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainReviewComponent } from './main-review.component';

describe('MainReviewComponent', () => {
  let component: MainReviewComponent;
  let fixture: ComponentFixture<MainReviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainReviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
