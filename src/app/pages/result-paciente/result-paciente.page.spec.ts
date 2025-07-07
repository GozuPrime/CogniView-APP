import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ResultPacientePage } from './result-paciente.page';

describe('ResultPacientePage', () => {
  let component: ResultPacientePage;
  let fixture: ComponentFixture<ResultPacientePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultPacientePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
