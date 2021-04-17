import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAgenceComponent } from './list-agence.component';

describe('ListAgenceComponent', () => {
  let component: ListAgenceComponent;
  let fixture: ComponentFixture<ListAgenceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListAgenceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListAgenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
