import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CaptureIAPage } from './capture-ia.page';

describe('CaptureIAPage', () => {
  let component: CaptureIAPage;
  let fixture: ComponentFixture<CaptureIAPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CaptureIAPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
