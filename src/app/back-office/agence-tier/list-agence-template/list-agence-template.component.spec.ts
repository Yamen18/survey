import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAgenceTemplateComponent } from './list-agence-template.component';

describe('ListAgenceTemplateComponent', () => {
  let component: ListAgenceTemplateComponent;
  let fixture: ComponentFixture<ListAgenceTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListAgenceTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListAgenceTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
