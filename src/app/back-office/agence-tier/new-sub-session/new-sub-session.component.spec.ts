import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewSubSessionComponent } from './new-sub-session.component';

describe('NewSubSessionComponent', () => {
  let component: NewSubSessionComponent;
  let fixture: ComponentFixture<NewSubSessionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewSubSessionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewSubSessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
