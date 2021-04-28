import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSubSessionComponent } from './list-sub-session.component';

describe('ListSubSessionComponent', () => {
  let component: ListSubSessionComponent;
  let fixture: ComponentFixture<ListSubSessionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListSubSessionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListSubSessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
