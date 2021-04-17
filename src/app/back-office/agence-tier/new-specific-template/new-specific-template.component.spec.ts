import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewSpecificTemplateComponent } from './new-specific-template.component';

describe('NewSpecificTemplateComponent', () => {
  let component: NewSpecificTemplateComponent;
  let fixture: ComponentFixture<NewSpecificTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewSpecificTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewSpecificTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
