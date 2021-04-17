import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QrCodeGenerateurDialogComponent } from './qr-code-generateur-dialog.component';

describe('QrCodeGenerateurDialogComponent', () => {
  let component: QrCodeGenerateurDialogComponent;
  let fixture: ComponentFixture<QrCodeGenerateurDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QrCodeGenerateurDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QrCodeGenerateurDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
